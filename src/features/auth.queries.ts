import { cookies } from "next/headers";
import { cache } from "react";
import { extendSession, inValidSession, validationSessionAndGetUser } from "./session/auth.session";
import { CreateServer } from "../utils/db";


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
        const id = await inValidSession(user.sessionData.id);
        console.log("id", id)
        return null 
    }

    const fifteenDays = 15*24*60*60*1000;
    const timeSinceLastVisit = now-user.sessionData.updatedAt.getTime();
    // console.log(fifteenDays, timeSinceLastVisit)

    if(timeSinceLastVisit <= fifteenDays){
        await extendSession(user.sessionData.id)
    }

    return user;
})