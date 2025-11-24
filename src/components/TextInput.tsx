import type { FieldError, UseFormRegisterReturn , Merge} from "react-hook-form";

type TextInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn; 
  error?: FieldError| Merge<FieldError, any> ;
};

export default function TextInput({
  label,
  type = "text",
  placeholder = "",
  register,
  error,
}: TextInputProps) {
  return (
    <div className="mb-4 bg">
      <label className="block mb-1">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-800  ${
          error ? "border-red-500" : "border-gray-500"
        }`}
        {...register}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
