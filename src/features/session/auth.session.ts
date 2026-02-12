"use server"
import {cookies, headers} from "next/headers"
import crypto from "crypto"
import { getIPAddress } from "./locationIp";
import { SessionTable } from "../../model/schema";
import { redirect } from "next/navigation";


type CreateSessionData = {
    userAgent: string,
    userId: string,
    token: string,
    ip: string,

}

const generateSesionToken = ()=>{
    return crypto.randomBytes(32).toString("hex").normalize();
}

const createSession = async ({ token, userId, userAgent, ip}: CreateSessionData )=>{

    await SessionTable.create({
        userId, userAgent, ip, token
    })
    // console.log(result)


}
 

export const createSessionSetCookies = async(userId: string)=>{
    const token = generateSesionToken();
    const ip = await getIPAddress();
    const headersList = await headers();


  const sessions = await createSession({
        token: token,
        userId: userId,
        userAgent: headersList.get("user-agent") || "",
        ip: ip,
    });

    console.log(sessions)
    const cookieStore = await cookies();

    cookieStore.set("session", token, {
        secure: true,
        httpOnly: true,
        maxAge: 30*24*60*60
    })
}



export const validationSessionAndGetUser = async (session: string)=>{
    const sessionDoc = await SessionTable.findOne({token: session}).populate("userId");
    if(!sessionDoc) return null;

    const user = sessionDoc.userId;
    return {
        sessionData:{
            id: sessionDoc._id,
            ip: sessionDoc.ip,
            userAgent: sessionDoc.userAgent,
            createdAt: sessionDoc.createdAt,
            updatedAt: sessionDoc.updatedAt,
            expiresAt: sessionDoc.expireAt,
        },
        user
    };
};

export const isValidSession = async (id: string)=>{
   await SessionTable.findByIdAndDelete(id);
//    console.log("session deleted:", id)
}
export const extendSession = async (id: string)=>{
    const newExpiry = new Date(Date.now()+30*24*60*60*1000);
    await SessionTable.findByIdAndUpdate(id, {expireAt: newExpiry});
    // console.log("Session expiry extended to", newExpiry)
}

// logout user

export const logoutUserAction = async() =>{
     const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;
    

    if(!session) return redirect("/login");
    const sessionDoc = await SessionTable.findOne({token: session});

    if(sessionDoc){
        await isValidSession(sessionDoc._id)
        cookieStore.delete("session");
    }
    return redirect("/login")
}