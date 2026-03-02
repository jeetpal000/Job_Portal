"use client"

import { Button } from '@/src/components/ui/button'
import { ArrowBigRightDash, Banknote, Briefcase, MapPin,  } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';



interface Job {
  _id: string;
  title: string;
  workType: string;
  location: string;
  currency: string;
  minSalary: number;
  maxSalary: number;
  userId?: {
    avatarUrl: string;
  };
  postedBy?: {
    companyname: string;
  }
}

const FeatureJb = ({ data }: { data: Job[] }) => {
  console.log(data)
  return (
    <section className="bg-[white] py-10 px-2">
      <div className="flex justify-between items-center border-b border-[#bababaa2] mb-2 shadow-xl">
        <h1 className="text-2xl sm:text-2xl md:text-3xl  lg:text-4xl  font-bold tracking-wide pb-5">
          Feature job
        </h1>
        <Button className='bg-transparent border-2 text-blue-600 flex gap-1 active:gap-3 hover:gap-3 hover:bg-transparent hover:shadow-xl'>View All <ArrowBigRightDash /> </Button>
      </div>
      <div className='grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3'>
        {
          data.map((item, id) => {
            return <div key={id} className="p-3 border-2 border-[#afafaf] rounded-md shadow-xl flex flex-col gap-3 hover:border-pink-500  active:border-blue-500 bg-linear-45 from-[#c0dbff95] via-[#defdff75] to-[#d9c6fda7]">

              <div className="flex justify-between gap-2 ">
                <Image src={item.userId?.avatarUrl || "/Copilot.png"} alt="image" width={50} height={60} loading='eager' className='rounded' />
                <div className="">
                  <h2 className="text-xl whitespace-nowrap font-medium truncate max-w-fit">
                    {item.title} 
                  </h2>
                  <p className='text-[#424242]'>
                    {item.postedBy?.companyname}

                  </p>
                </div>
              </div>
              <div className=" flex gap-3">
                <span className='p-1 bg-[rgba(0,0,0,0.1)] rounded flex gap-1 whitespace-nowrap truncate'><MapPin className='shrink-0 text-[#0073ff]' />
                  {item.location}
                </span>
                <p className='p-1 bg-[rgba(0,0,0,0.1)] rounded flex items-center gap-1 whitespace-nowrap'><Briefcase className='text-[#0073ff]' /><span>
                  {item.workType}
                </span></p>
              </div>
              <div className="border-b pb-1 border-[#838383b6]">
                <p className='p-1 bg-[rgba(0,0,0,0.1)] rounded flex gap-1 w-fit'><Banknote className='text-[#0062ff]' />
                  {item.currency}{" "}{item.minSalary}{"-"}{item.maxSalary}
                </p>
              </div>
              <Link href={`/view-details/${item._id}`} className='text-[blue] hover:underline flex items-end justify-end '>View details</Link>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default FeatureJb