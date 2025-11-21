import { useForm } from "react-hook-form";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "../validations/formValidationSchema";

type RegisterInput = z.infer<typeof validationSchema>;

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = async () => {
    console.log("register data");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5 m-auto text-gray-800 w-[50%] border border-gray-200 rounded-2xl mt-0">
      <p className="text-ascent-1 text-base font-semibold">
        Create your account
      </p>
      <span className="text-sm mt-2 text-ascent-2">
        Welcome! Please register
      </span>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 py-1 flex flex-col gap-1"
      >
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

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Register
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
}
