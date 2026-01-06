import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../providers/AuthProvider";
import { loginSchema } from "../validations/formValidationSchema";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "../utils/api";
import axios from "axios";

type LoginInput = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: LoginInput) => api.post("/auth/login", data),
    onSuccess: (res) => {
      const { token, user } = res.data;

      // Store token locally
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id.toString());

      // Update context
      setUser(user);
      setIsAuthenticated(true);

      // Navigate home
      navigate("/");
    },
    onError: (err: unknown) => {
      let message = "Invalid credentials";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }

      setError("root", { type: "manual", message });
    },
  });

  const onSubmit = (data: LoginInput) => {
    mutate(data);
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-4 p-15 m-auto text-gray-800 w-[40%] rounded-2xl">
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
            Login
            {isPending && <span className="animate-pulse">...</span>}
          </button>
          <p className="text-ascent-2 text-sm text-center">
            Don't have an account?
            <Link
              to="/register"
              className="text-[#065ad8] font-semibold ml-2 hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
