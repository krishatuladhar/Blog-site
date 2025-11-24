import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../providers/AuthProvider";
import { loginSchema } from "../validations/formValidationSchema";

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

  const onSubmit = async (data: LoginInput) => {
    try {
      const res = await axios.post(
        "http://localhost:5501/api/auth/login",
        data
      );

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id.toString());
      setUser(user);
      console.log(user)
      setIsAuthenticated(true);
      navigate("/");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError("email", {
          type: "manual",
          message: error.response?.data?.message || "Invalid credentials",
        });
        setError("password", {
          type: "manual",
          message: error.response?.data?.message || "Invalid credentials",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Invalid credentials",
        });
        setError("password", {
          type: "manual",
          message: "Invalid credentials",
        });
      }
    }
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
};

export default LoginForm;
