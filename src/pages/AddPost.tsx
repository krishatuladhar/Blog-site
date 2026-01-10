import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidationSchema } from "../validations/postValidationSchema";
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";
import type z from "zod";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

type PostInput = z.infer<typeof postValidationSchema>;

const AddPost = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors },
  } = useForm<PostInput>({
    resolver: zodResolver(postValidationSchema),
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setSelectedFile(null);
      setImagePreview(null);
      return;
    }

    if (
      !["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
        file.type
      )
    ) {
      toast.error("Only .jpg, .jpeg, .png, .webp files are accepted");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Max file size is 5MB");
      return;
    }

    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const removeImage = () => {
    setSelectedFile(null);
    setImagePreview(null);
  };
  const onSubmit = async (data: PostInput) => {
    if (!user) {
      toast.error("You must be logged in to create a blog");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("author_id", user.id.toString());
      if (selectedFile) formData.append("image", selectedFile);
      formData.append("isFeatured", JSON.stringify(isFeatured));
      console.log(formData);

      await api.post("/blog", formData);

      toast.success("Blog created successfully!");
      reset();
      setImagePreview(null);
      setSelectedFile(null);
      setIsFeatured(false);
      navigate("/");
    } catch (error: unknown) {
      let message = "Something went wrong";
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }
      toast.error(message);
      setError("root", { type: "manual", message });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#FFF4EA]/40 p-20 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-10">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold font-primary">
            Write a new story
          </h1>
          <p className="text-gray-500 mt-3 font-secondary">
            Share your thoughts, ideas, and moments with the world
          </p>
        </div>

        {errors.root && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {errors.root.message}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Category */}
          <TextInput
            label="Category"
            type="text"
            register={register("category")}
            error={errors.category}
          />

          {/* Title */}
          <TextInput
            label="Title"
            type="text"
            register={register("title")}
            error={errors.title}
          />

          {/* Description */}
          <TextInput
            label="Description"
            type="text"
            register={register("description")}
            error={errors.description}
          />

          {/* Image upload */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Cover Image
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 cursor-pointer hover:border-pink-400 transition">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />

              <span className="text-gray-500 text-sm">
                Click to upload or drag & drop
              </span>
              <span className="text-xs text-gray-400 mt-1">
                PNG, JPG, WEBP (max 5MB)
              </span>
            </label>

            {imagePreview && (
              <div className="relative w-full h-64 rounded-2xl overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-3 right-3 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Featured */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="h-5 w-5 rounded border-gray-300 accent-pink-400"
            />
            <span className="text-gray-700 font-medium">
              Mark as featured blog
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-full text-lg font-medium transition ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#FFF4EA] hover:bg-pink-300"
            }`}
          >
            {loading ? "Publishing..." : "Publish blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
