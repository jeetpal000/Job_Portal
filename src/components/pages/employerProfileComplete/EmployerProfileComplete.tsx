import { getCurrentuser } from '@/src/features/auth.queries'
import { AlertTriangleIcon } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import { getEmployerUser } from './employerProfileCompleteAction';


const EmployerProfileComplete = async() => {
     const employer = await getEmployerUser();
     if(!employer) return redirect("/login")
    if(employer?.isProfileCompleted) return null
      console.log(employer)

  return (
    <div className="bg-red-500 p-4 mx-auto w-full mt-5 rounded text-accent flex gap-5 items-center justify-between">
      <div className="flex gap-4 items-center ">
      <AlertTriangleIcon  />
        <p className="flex flex-col"> <span className="font-medium ">Incomplete Profile</span><span>You {"haven't"} completed your employer profile yet please complete profile post jobs qne access all features</span></p>
      </div>
      <button className="whitespace-nowrap h-12 border px-2 cursor-pointer rounded-md"><Link href="/employer-dashboard/setting">Complete Profile</Link></button>
    </div>
  )
}

export default EmployerProfileComplete