import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../validations/formValidationSchema";
import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";

type RegisterInput = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: RegisterInput) => api.post("/auth/register", data),
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err: unknown) => {
      let message = "Something went wrong";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }

      setError("root", { type: "manual", message });
    },
  });

  const onSubmit = (data: RegisterInput) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-15 m-auto text-gray-800 w-[40%] rounded-2xl mt-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-full"
        noValidate
      >
        <div
          className={`${
            errors.root ? "visible" : "invisible"
          } bg-red-100 text-red-700 border border-red-300 p-2 rounded text-sm`}
        >
          {errors.root ? errors.root.message : "Error here"}
        </div>
        <TextInput
          label="Name"
          type="text"
          register={register("name")}
          error={errors.name}
        />

        <TextInput
          label="Email"
          type="email"
          register={register("email")}
          error={errors.email}
        />

        <TextInput
          label="Password"
          type="password"
          register={register("password")}
          error={errors.password}
        />

        <button
          type="submit"
          disabled={isPending}
          className="flex items-center justify-center gap-2 bg-blue-500 p-5  text-center text-white"
        >
          Register
          {isPending && <span className="animate-pulse">...</span>}
        </button>

        <p className="text-ascent-2 text-sm text-center">
          Already have an account?
          <Link
            to="/login"
            className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default RegisterForm;
