import { z } from "zod";

// 🔑 Login requirements - keep it simple but secure
export const loginSchema = z.object({
    username: z.string()
        .min(1, "Yo, we need something here! 🤨")
        .max(50, "Whoa there Shakespeare, shorten it! ✂️"),
    password: z.string()
        .min(1, "Can't login without this! 🔐")
});

export type LoginFormData = z.infer<typeof loginSchema>;

// ✨ Signup requirements - extra strict for new accounts
export const signUpSchema = z.object({
    username: z.string()
        .min(3, "Username gotta be at least 3 characters long 😤")
        .max(20, "Save some characters for the rest of us! 🙄")
        .regex(/^[a-zA-Z0-9_]+$/, "No weird symbols fam! A-Z, 0-9 and _ only"),
    password: z.string()
        .min(8, "Password too short! Make it 8+ characters 💪")
        .max(32, "Whoa there! Max 32 characters please 🙏")
        .regex(/[A-Z]/, "Need at least 1 uppercase letter ⬆️")
        .regex(/[0-9]/, "Throw in a number or two 🔢"),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match, try again! 🔒",
    path: ["confirmPassword"],
});

export type SignUpFormData = z.infer<typeof signUpSchema>;