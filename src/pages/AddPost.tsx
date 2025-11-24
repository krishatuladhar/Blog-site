import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidationSchema } from "../validations/postValidationSchema";
import { useAuth } from "../providers/AuthProvider";
import axios from "axios";
import type z from "zod";
import { toast } from "react-toastify";

type PostInput = z.infer<typeof postValidationSchema>;

const AddPost = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PostInput>({
    resolver: zodResolver(postValidationSchema),
  });
  const onSubmit = async (data: PostInput) => {
    if (!user) {
      toast.error("You must be logged in to create a blog");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("author_id", user.id.toString());
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const token = localStorage.getItem("token");

      await axios.post("http://localhost:5501/api/blog", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Blog created successfully!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.message || "Something went wrong";
        toast.error(message);
        setError("title", { type: "manual", message });
        setError("description", { type: "manual", message });
      } else {
        toast.error("Something went wrong");
        setError("title", { type: "manual", message: "Something went wrong" });
        setError("description", {
          type: "manual",
          message: "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5 m-auto text-gray-800 w-[70%] border border-gray-200 rounded-2xl mt-0">
      <span className="text-lg font-semibold">Create Blog</span>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 py-1 flex flex-col gap-1"
      >
        <TextInput
          label="Title"
          type="text"
          register={register("title")}
          error={errors.title}
        />

        <TextInput
          label="Description"
          type="text"
          register={register("description")}
          error={errors.description}
        />

        <TextInput
          label="Image"
          type="file"
          register={register("image")}
          error={errors.image}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default AddPost;
