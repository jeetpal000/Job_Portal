
import EmployerProfileComplete from "../../components/pages/employerProfileComplete/EmployerProfileComplete"
import { getCurrentuser } from "@/src/features/auth.queries"
import {UserLockIcon } from "lucide-react";

const EmployerDashboard = async() => {
  const user =await getCurrentuser();
  return (
    <main className="pl-6 p-3">
    
    <h2 className="text-muted-foreground font-bold tracking-wide">Hello, {user?.user?.name}</h2>
    <p className="text-gray-400 text-sm">Here is your daily activities and applications</p>
    <div className="flex gap-4 mt-5 text-muted-foreground">
      <div className="w-50 h-20 bg-sky-200 rounded-md shadow-[0_0_5px_blue] flex justify-between p-2 items-center ">
        <div className="text-sm">
          <h2 className="text-lg font-medium">589</h2>
         <p> Open Jobs</p>
        </div>
        <UserLockIcon />
      </div>
      <div className="w-50 h-20 bg-orange-200 rounded-md shadow-[0_0_5px_red] flex justify-between p-2 items-center">
        <div className="text-sm">
          <h2 className="text-lg font-medium">{(2345).toLocaleString("en-IN")}</h2>
         <p> Open Jobs</p>
        </div>
        <UserLockIcon />
      </div>
    </div>
    <EmployerProfileComplete />
  </main>
  )
}

export default EmployerDashboard