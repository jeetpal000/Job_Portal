"use server"
import { JobPostTable } from "@/src/model/schema"


export const deleteEmployerJob = async (id: string)=>{
   const result =  await JobPostTable.findByIdAndDelete({_id: id});

   if(result){
        return {
            message: "Job Delete successfully....."
        }
   }
}

export const getJobById = async (id: string) => {
  const job = await JobPostTable.findById(id).lean();
  if (!job) return null;

  return {
    ...job,
    _id: job._id.toString(),
    date: job.date,
  };
};
