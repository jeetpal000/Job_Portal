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
    role: {
        type: String,
        required: true,
    },
    avatarUrl: {
        type: String,
        // required: true,
        trim: true,
    },

}, { timestamps: true });


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
    token: {
        type: String,
        required: true,
    },
    ip: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        index: { expires: 86400 }
    }
}, { timestamps: true });



export const SessionTable = mongoose.models.SessionTable || mongoose.model("SessionTable", SessionSchema);






const EmployerSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserTable",
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    companyname:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    bannerImageUrl: {
        type: String,
        // required: true,
        trim: true,
    },
    organisationType: {
        type: String,
        required: true,
    },
    teamSize: {
        type: String,
        required: true,

    },
    yearOfEstablishment: {
        type: String,
        required: true,
    },
    websiteUrl: {
        type: String,
        // required: true,
    },
    location: {
        type: String,
        required: true,
    },

}, { timestamps: true })

export const EmployerTable = mongoose.models.EmployerTable || mongoose.model("EmployerTable", EmployerSchema)




const JobPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    employerId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
    },
    minSalary: {
        type: Number,
    },
    minEducation: {
        type: String,       
    },
    maxSalary: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
    },
    period: {
        type: String,
    },
    location: {
        type: String,
    },
    jobType: {
        type: String,
        required: true,
    },
    workType: {
        type: String,
        required: true,
    },
    jobLevel: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
})


export const JobPostTable = mongoose.models.JobPostTable || mongoose.model("JobPostTable", JobPostSchema);