"use server"
import { createSessionSetCookies } from "@/src/features/session/auth.session";
import { UserTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db";
import { loginUserData, loginUserSchema } from "@/src/validation/auth.validation";
import argon2 from "argon2"

export const loginAction = async (data: loginUserData) => {
    try {
        await CreateServer();
        const { data: validationData, error } = loginUserSchema.safeParse(data)
        if (error) return { status: "ERROR", message: error.issues[0].message };
        const { email, password } = validationData;
        const userExistance = await UserTable.findOne({ email });
        if (!userExistance) {
            return {
                status: "ERROR",
                message: "User not exist please register"
            }
        }
        const verifyPassword = await argon2.verify(userExistance.password, password);
        // console.log(verifyPassword)
        if (!verifyPassword)
            return {
                status: "ERROR",
                message: "Password you have entered wrong"
            }

        await createSessionSetCookies(userExistance._id.toString())

        return {
            status: "SUCCESS",
            message: "Login successfull"
        }

    } catch (error) {
        console.error(error);
        return {
            status: "ERROR",
            message: "Something went wrong"
        }
    }
}