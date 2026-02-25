import { Button } from '@/src/components/ui/button'
import {  ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegisterCard = () => {
  return (
    <section className="">
      <div className="flex flex-wrap md:flex-nowrap md:justify-between bg-white px-2 py-10 gap-5 lg:gap-4">
        {/* //Candidate */}
        <div className="flex items-center justify-between gap-1 p-3 rounded-md bg-linear-45 from-[gray] via-[white] to-[gray]">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-medium">Become a Candidate</h3>
            <p className="text-muted-foreground text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eaque recusandae quibusdam at ullam veritatis amet nam enim alias!</p>
           <Link href="" 
           className='flex items-center border-2 w-fit rounded  border-[#b6b6b6] px-1 gap-0 hover:gap-1 hover:shadow-xl bg-white text-blue-600 font-medium text-xs'
           >Register Now <ArrowRight /></Link>
          </div>
          <div className=" shrink-0">
            <Image src="/—Pngtree—close-up of two human hands_20992570.png" alt="register" width={200} height={200}
            className='rounded-md' 
            />
          </div>
        </div>

    {/* {Employers} */}
       <div className="flex items-center justify-between gap-1 p-3 rounded-md bg-linear-45 from-blue-600 via-blue-100 to-blue-100">
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-medium">Become an Employer</h3>
            <p className="text-muted-foreground text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut eaque recusandae quibusdam at ullam veritatis amet nam enim alias!</p>
           <Link href="" 
           className='flex items-center border-2 w-fit rounded  border-[#b6b6b6] px-1 gap-0 hover:gap-1 hover:shadow-xl bg-white text-blue-600 font-medium text-xs'
           >Register Now <ArrowRight /></Link>
          </div>
          <div className=" shrink-0">
            <Image src="/—Pngtree—youngsmilingmanholdinglaptop_15632894.png" alt="register" width={200} height={200}
            className='rounded-md' 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterCard