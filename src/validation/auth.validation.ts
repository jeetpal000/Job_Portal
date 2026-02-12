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


export const employerProfileSchema = z.object({
    username: z
        .string()
        .trim()
        .min(3, "user name at least 3 char")
        .max(255, "user name at least 255 char")
        .regex(
            /^[a-zA-Z0-9_-]+$/, "user can only containn letters, numbers, underscore and hyphens"
        ),
    email:z
        .string()
        .trim()
        .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/
            , "Please enter valid email address")
        .toLowerCase(),
    organisationType: z
        .enum(["Developer", "Video editor","Business","Design"]),
    teamSize: z
        .enum(["Just me", "2-10 employees","11-50 employees","51-200 employees","201-500 employees","501-1000 employees","1001+ employees"]),
    description: z
            .string()
            .max(1000,  "Maximum 1000 character")
            .min(10,  "minimum 10 character")
            .trim(),
    companyname: z
            .string()
            .trim(),
    websiteUrl: z
            .url()
            .trim(),
    yearOfEstablishment: z
            .string()
            .trim(),
    location: z
            .string()
            .trim(),
    avatarUrl: z
            .string()
            .trim(),
    
    
})
export type employerProfileSchemaData = z.infer<typeof employerProfileSchema>