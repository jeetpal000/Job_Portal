"use server"
import { cookies } from "next/headers";
import { cache } from "react";
import { extendSession, isValidSession, validationSessionAndGetUser } from "./session/auth.session";
import { CreateServer } from "../utils/db";
import { EmployerTable, JobPostTable } from "../model/schema";


export const getCurrentuser = cache(async()=>{
    await CreateServer();
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;

    if(!session) return null;
    
    const user = await validationSessionAndGetUser(session);
    if(!user) return null;
    const now = Date.now();
    const expiresAt = user.sessionData.expiresAt.getTime();
    if(now >= expiresAt) {
        const id = await isValidSession(user.sessionData.id);
        // console.log("id", id)
        return null;
    }

    const fifteenDays = 15*24*60*60*1000;
    const timeSinceLastVisit = now-user.sessionData.updatedAt.getTime();
    // console.log(fifteenDays, timeSinceLastVisit)

    if(timeSinceLastVisit <= fifteenDays){
        await extendSession(user.sessionData.id)
    }
    return user;
});


export const getEmployerProfileData = async()=>{
    const user = await getCurrentuser();
    console.log("user settting", user)
    return await EmployerTable.findOne({userId: user?.user._id});
}

export const getMyJobs = async()=>{
    const user = await getCurrentuser()

    const result = await JobPostTable.find({employerId: user?.user?._id}).lean();
    return result
}