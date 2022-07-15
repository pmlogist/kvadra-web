import { z } from "zod";

export type RequestLoginBody = z.infer<typeof login>;
export type RequestRegisterBody = z.infer<typeof register>;

const login = z.object({
  email: z
    .string({ required_error: "Must enter an email" })
    .email({ message: "Must have a correct email format" }),
  password: z.string({ required_error: "required" }),
});

const register = z.object({
  firstName: z
    .string({ required_error: "required" })
    .min(2, { message: "Must be superior to 2 characters" }),
  lastName: z
    .string({ required_error: "required" })
    .min(2, { message: "Must be superior to 2 characters" }),
  username: z
    .string({ required_error: "required" })
    .min(3, { message: "Must be superior to 3 characters" }),
  email: z
    .string({ required_error: "Must enter an email" })
    .email({ message: "Must have a correct email format" }),
  password: z
    .string({ required_error: "required" })
    .min(6, { message: "Must be superior to 6 characters" }),
  locale: z.string({ required_error: "required" }),
  learning: z.string({ required_error: "required" }),
});

export const authSchemas = { login, register };
