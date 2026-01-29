import { z } from "zod"

export const registerUserSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name at least 2 char")
        .max(255, "Name at least 255 char"),
    userName: z
        .string()
        .trim()
        .min(3, "user name at least 3 char")
        .max(255, "user name at least 255 char")
        .regex(
            /^[a-zA-Z0-9_-]+$/, "user can only containn letters, numbers, underscore and hyphens"
        ),
    email: z
        .string()
        .trim()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            , "Please enter valid email address")
        .toLowerCase(),
    password: z
        .string()
        .min(8, "Password must at least 8 character long")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one lowercase letter, oneuppercase letter and a special character"
        ),
    confirmPassword: z.string().trim(),
    role: z
        .enum(["applicant", "employer"])
    // .default("applicant")
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: ["confirmPassword"]
    })

export type registerUserData = z.infer<typeof registerUserSchema>;

export const loginUserSchema = z.object({
    email: z
        .string()
        .trim()
        .toLowerCase()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            , "Please enter valid email address"),
    password: z
        .string()
        .min(8, "Password must at least 8 character long")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            "Password must contain at least one lowercase letter, oneuppercase letter and a special character"
        ),
})
export type loginUserData = z.infer<typeof loginUserSchema> 