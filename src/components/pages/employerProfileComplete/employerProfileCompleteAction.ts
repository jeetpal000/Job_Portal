import { getCurrentuser } from "@/src/features/auth.queries";
import { EmployerTable } from "@/src/model/schema";
import { CreateServer } from "@/src/utils/db"

export const getEmployerUser = async()=>{
    await CreateServer();
    const user =await getCurrentuser()
    const employer = await EmployerTable.findOne({userId: user?.user._id});
    if(!employer) return {}
    const isProfileCompleted = employer.description  && employer.teamSize && employer.yearOfEstablishment && employer.websiteUrl;
    return {
        employer,
        isProfileCompleted,
        // employer
    }
}