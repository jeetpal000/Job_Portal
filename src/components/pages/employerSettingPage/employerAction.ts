"use server"
import { getCurrentuser } from "@/src/features/auth.queries"
import { EmployerTable, UserTable } from "@/src/model/schema"
import { CreateServer } from "@/src/utils/db"
import { employerProfileSchema, employerProfileSchemaData } from "@/src/validation/auth.validation"


// interface data {
//     organisationType: string,
//     teamSize: string, 
//     username: string, 
//     email: string, 
//     description: string, 
//     yearOfEstablishment: string, 
//     location: string, 
//     websiteUrl: string
// }

export const employerUpdateProfileAction = async (data: employerProfileSchemaData) => {
    const { organisationType, teamSize, username, email, description, yearOfEstablishment, companyname, location, websiteUrl, avatarUrl } = data
    await CreateServer();
    const user = await getCurrentuser();
   const imageupdated =  await UserTable.findByIdAndUpdate(user?.user._id,
        {
            avatarUrl: avatarUrl
        },
        {new: true}
    );
    console.log("imageUpdated", imageupdated)
    const employerUser = await EmployerTable.findOne({userId: user?.user._id});
    // console.log("employerUser", employerUser)
    // if(employerUser) return null;
    // console.log("User")
    if(!employerUser){
         const saved =  await EmployerTable.create({
        organisationType, teamSize, username, email, description, yearOfEstablishment, companyname, location, websiteUrl, userId: user?.user._id
    })
    if(saved){
        return {
            message: "Profile completed Sucessfully🎉"
        }
    }
    }
    if(employerUser){
        await EmployerTable.findByIdAndUpdate({_id:employerUser._id},{
            organisationType, teamSize, username, email, description, yearOfEstablishment, companyname, location, websiteUrl
        }, {new: true})
        return {message: "Profile updated successfully🎉"}
    }
}

export const employerDetails = async()=>{
    const user = await getCurrentuser();
    const employer =  await EmployerTable.findOne({userId: user?.user._id}).populate("userId").lean();
    const userData = employer.userId
    return {
        ...employer,
        _id: employer?._id.toString(),
        userId: employer?.userId.toString(),
        userData
    };
}


