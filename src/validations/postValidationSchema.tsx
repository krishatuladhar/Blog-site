import { z } from "zod";

export const postValidationSchema = z.object({
  category: z.string().min(2, "Category is required"),
  title: z.string().min(2, "title is required"),
  description: z
    .string()
    .min(1, "Description is required"),
  isFeatured: z.boolean().optional(),
});

export const postEditValidationSchema = z.object({
  title: z.string().optional(),
  category: z.string().optional(),
  description: z.string().optional(),
  image: z.any().optional(),
  isFeatured: z.boolean().optional(),
});
