"use server"

import { createSessionSetCookies } from "@/src/features/session/auth.session";
import { UserTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db";
import { registerUserData, registerUserSchema } from "@/src/validation/auth.validation";
import argon2 from "argon2";

export const registrationServer = async (data: registerUserData) => {
     try {
          await CreateServer();

          const { data: validationData, error } = registerUserSchema.safeParse(data);
          console.log("error", error);
          if (error) return { status: "ERROR", message: error.issues[0].message };
          const { name, userName, email, password, role } = validationData;

          const userExistance = await UserTable.findOne({ $or: [{ email }, { userName }] });
          if (userExistance) {
               // console.log("User is already baitha hai is email se")
               return { status: "ERROR", message: "User already exists with same username or email", };
          }
          const hashedPassword = await argon2.hash(password);     

          const result = await UserTable.create({ name, userName, email, password: hashedPassword, role })
          await createSessionSetCookies(result._id);
          return {
               status: "SUCCESS",
               message: "Registration Completed Successfullly"
          };
     } catch (error) {
          console.error(error)
          return {
               status: "ERROR",
               message: "Unknown Error occurred! Please try again"
          };
     }
}