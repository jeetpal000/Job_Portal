import AppliicantAllJob from '@/src/components/pages/applicantAllJob/AppliicantAllJob'
import { getAllJobs, getCurrentuser } from '@/src/features/auth.queries'
import React from 'react'

const page = async() => {
  const data = await getAllJobs();
  return (
    <div className='p-4'>
      <h1 className='font-bold text-2xl text-[#161616]'>Find your Next Dream Job</h1>
      <p className="text-[#ffffff] font-medium tracking-wide">Browse latest job openings from top companies</p>
      <div className="pt-5">
      <AppliicantAllJob data={data} />
      </div>
    </div>
  )
}

export default page