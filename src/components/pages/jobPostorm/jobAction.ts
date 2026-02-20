"use server"

import { getCurrentuser } from "@/src/features/auth.queries";
import { JobPostTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db";
import { jobPostSchemaData } from "@/src/validation/auth.validation"

export const jobPostAction = async(data: jobPostSchemaData, id: string | null)=>{
    const {
        title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description
    } = data;
    await CreateServer();
    const jobTable = await JobPostTable.findByIdAndUpdate(id,
        // {
        //     title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description,
        // }
        data,
        {new: true}
    )
    console.log(id);
    if(jobTable){
            return {message: "Job updated successfully"}
    }

        const user = await getCurrentuser();      

       await JobPostTable.create({
            title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description,
            employerId: user?.user._id
        });
    return {
        message: "Job posted successfully.."
    }
    
}