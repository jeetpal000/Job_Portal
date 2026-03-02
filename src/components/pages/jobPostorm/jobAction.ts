"use server"

import { getCurrentuser, getEmployerProfileData } from "@/src/features/auth.queries";
import { JobPostTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db";
import { jobPostSchemaData } from "@/src/validation/auth.validation"

export const jobPostAction = async(data: jobPostSchemaData, id: string | null):Promise<{message: string}> =>{
    const {
        title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description
    } = data;
    await CreateServer();
    if(id){

        const jobTable = await JobPostTable.findByIdAndUpdate(id, data, {new: true})
            if(jobTable){
                return {message: "Job updated successfully"}
            }
    }

        const user = await getCurrentuser();
        const profile = await getEmployerProfileData();      

       await JobPostTable.create({
            title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description,
            postedBy: profile._id, userId: user?.user._id,
        });
    return {
        message: "Job posted successfully.."
    }
    
}