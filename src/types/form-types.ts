"use client";

import { z } from "zod";

export const registerFormValidation = z
  .object({
    name: z
      .string()
      .min(2, { message: "Name must be at least 2 characters long" })
      .max(50, { message: "Name must be at most 50 characters long" }),
    email: z
      .string()
      .min(2, { message: "Email must be at least 2 characters long" })
      .max(100, { message: "Email must be at most 100 characters long" })
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" })
      .max(40, { message: "Password must be at most 40 characters long" }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Confirm password must be at least 6 characters long",
      })
      .max(40, {
        message: "Confirm password must be at most 40 characters long",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type registerSchema = z.infer<typeof registerFormValidation>;
