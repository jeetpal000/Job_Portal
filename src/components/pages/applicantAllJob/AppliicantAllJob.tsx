"use client"
import { Banknote, Briefcase, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react';



interface Job {
    _id: string;
    title: string;
    location: string;
    jobType: string;
    workType: string;
    jobLevel: string;
    currency: string;
    minSalary: number | null;
    maxSalary: number | null;
    date: string | Date;
}

interface EmployerAllJobProps {
    data: Job[];
}


const AppliicantAllJob: React.FC<EmployerAllJobProps> = ({ data})  => {
  const [jobs, setJobs] = useState(data);
  return (
    <div className='grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3'>
      {
       jobs.map((item)=>{
        return <div key={item._id} className="p-3 shadow-[0px_0px_10px_3px_rgba(25,25,25,0.8)] rounded-xl flex flex-col gap-3">

        <div className="flex justify-between gap-2 ">
          <Image src="https://yt3.ggpht.com/ytc/AIdro_kFzvYt5kK5zhvKTRxXdB4th3a4y0b9zkedbplF6GnyOis=s88-c-k-c0x00ffffff-no-rj" alt="image" width={100} height={100} className='rounded-md' />
          <div className="">
            <h2 className="text-xl whitespace-nowrap font-medium truncate max-w-fit">{item.title} </h2>
            <p className='text-[#424242]'>Kodifier pvt ltd.</p>
          </div>
        </div>
        <div className=" flex gap-3">
          <span className='px-1 bg-[rgba(0,0,0,0.1)] rounded flex gap-1'><MapPin />{item.location}</span>
          <p className='px-1 bg-[rgba(0,0,0,0.1)] rounded flex items-center gap-1 whitespace-nowrap'><Briefcase /><span>{item.workType.charAt(0).toUpperCase()+item.workType.slice(1).replace("-", " ")}</span></p>
        </div>
        <div className="">
          <p className='px-1 bg-[rgba(0,0,0,0.1)] rounded flex gap-1'><Banknote />{item.currency}{" "}{item.minSalary}{"-"}{item.maxSalary}</p>
        </div>
      </div>
       }) 
      }
      
    </div>
  )
}

export default AppliicantAllJob