"use server"

import { UserTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db";
import argon2 from "argon2"

export const registrationServer = async (data: {
     name: string;
     userName: string;
     email: string;
     password: string;
     role: string;
}) => {
     try {

          await CreateServer();



          const { name, userName, email, password, role } = data;
          const existance = await UserTable.findOne({ $or: [{ email }, { userName }] });
          if (existance) {
               console.log("User is already baitha hai is email se")
               return { status: "ERROR", message: "User already exists with same username or email", };
          }
          const hashedPassword = await argon2.hash(password);

          const userdata = await UserTable.create({ name, userName, email, password: hashedPassword, role })
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