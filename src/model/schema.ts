import mongoose from "mongoose"
import { unique } from "next/dist/build/utils";

// interface UserModel{
//     name: string,
//     userName: string,
//     password: string,
//     role:string,
// }

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
    }
    
}, {timestamps: true});



const SessionSchema = new mongoose.Schema({
    UserId: {
        type: String,
    },
    userAgent: {
        type: String,
    },
    ip: {
        type: String,
    },
    expireAt: {
        type: Date,
        default: ()=>new Date(Date.now()+25*60*60*1000),
        index: {expires: 86400}
    }
}, {timestamps: true});


export const UserTable = mongoose.models.UserTable || mongoose.model("UserTable", Users);

export const SessionTable = mongoose.models.SessionTable || mongoose.model("SessionTable", SessionSchema);