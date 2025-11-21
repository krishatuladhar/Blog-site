import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginInput = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async () => {
    console.log("login data");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5 m-auto text-gray-800 w-[50%] border border-gray-200 rounded-2xl mt-0">
      <p className="text-ascent-1 text-base font-semibold">Login</p>
      <span className="text-sm mt-2 text-ascent-2">Enter your credentials</span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 py-1 flex flex-col gap-1"
      >
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

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>

        <p className="text-ascent-2 text-sm text-center">
          Don't have an account?
          <Link
            to="/register"
            className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
