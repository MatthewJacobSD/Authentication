import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string()
        .min(3, "User must be at least 3 characters"),
    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(15, "Password cannot exceed 15 characters"),
    confirmPassword: z.string()
        .min(8, "Confirm Password must be at least 8 characters long")
        .max(15, "Confirm Password cannot exceed 15 characters"),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });

export type TypeAuth = z.infer<typeof signUpSchema>;
