"use server"

import { getCurrentuser } from "@/src/features/auth.queries";
import { JobPostTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db";
import { jobPostSchemaData } from "@/src/validation/auth.validation"

export const jobPostAction = async(data: jobPostSchemaData)=>{

    const {
        title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description
    } = data;
    await CreateServer();
        const user = await getCurrentuser();

    // const employerUser = await JobPostTable.findOne({employerId: user?.user._id});
    // console.log(data)

       const result =  await JobPostTable.create({
            title, jobType, workType, jobLevel, location, tags, minSalary, maxSalary, currency, period, minEducation, date, experience, description,
            employerId: user?.user._id
        });
    return {
        message: "Job posted successfully.."
    }
    
}