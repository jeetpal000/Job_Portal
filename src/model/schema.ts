import mongoose from "mongoose"

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
        required: true,
    }
    
}, {timestamps: true});


export const UserTable = mongoose.models.UserTable || mongoose.model("UserTable", Users);

const SessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserTable",
        required: true,
    },
    userAgent: {
        type: String,
        required: true,
    }, 
    token:{
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: ()=>new Date(Date.now()+30*24*60*60*1000),
        index: {expires: 86400}
    }
}, {timestamps: true});



export const SessionTable = mongoose.models.SessionTable || mongoose.model("SessionTable", SessionSchema);