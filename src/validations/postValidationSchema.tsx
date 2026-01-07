import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/x-png",
  "image/webp",
];

export const postValidationSchema = z.object({
  title: z.string().min(2, "Title is required"),
  description: z.string().min(10, "Description is required"),

  image: z
    .any()
    .optional()
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; 
        const file = files[0]; 
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      },
      { message: "Only .jpg, .jpeg, .png, .webp files are accepted" }
    )
    .refine(
      (files) => {
        if (!files || files.length === 0) return true; 
        const file = files[0];
        return file.size <= MAX_FILE_SIZE;
      },
      { message: "Max file size is 5MB" }
    ),
});
