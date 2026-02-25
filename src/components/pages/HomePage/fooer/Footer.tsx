import { BriefcaseBusiness, Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="pt-15 bg-linear-45 from-[#021d54] via-[#e4e4e4] to-[#6e8bb1]">
      <section className="px-2 grid gap-6 md:grid-cols-2 lg:grid-cols-5   lg:auto-cols-max lg:grid-flow-col place-content-center place-items-center ">

      <div className="xs:col-span-2 sm:col-span-2 md:col-span-2  lg:col-span-1 md:mx-auto sm:mx-auto xs:mx-auto lg:mx-0 lg:justify-self-start">
          <div className="flex items-center gap-1"><BriefcaseBusiness className='text-[#00a6ff]' /><span className='font-bold text-2xl text-[#000000]'>Jobpilot</span></div>
          <p className="text-[#2f2d2d]">
            Call now: <span className="text-white">+91 8726156494</span>
          </p>
          <p className="text-[#2f2d2d]">106 Jaunpur Uttar Pradesh India</p>
          
      </div>
      <div className="justify-self-auto md:mx-auto sm:mx-auto xs:mx-auto lg:mx-0 w-fit">
          <h3 className="text-black text-xl font-medium">Quick Link</h3>
        <div className="flex flex-col gap-2 text-[#2f2d2d] ">
        <Link href="" className='hover:text-muted'>About</Link>
        <Link href="" className='hover:text-muted text-muted'>Contact</Link>
        <Link href="" className='hover:text-muted'>Pricing</Link>
          <Link href="" className='hover:text-muted'>Blog</Link>
        </div>
      </div>
      <div className="justify-self-auto md:mx-auto sm:mx-auto xs:mx-auto lg:mx-0 w-fit">
          <h3 className="text-black text-xl font-medium">Candidate</h3>
        <div className="flex flex-col gap-2 text-[#2f2d2d] ">
          <Link href="" className='hover:text-muted'>Browse Jobs</Link>
          <Link href="" className='hover:text-muted'>Browse Employers</Link>
          <Link href="" className='hover:text-muted'>Candidate Dashboard</Link>
          <Link href="" className='hover:text-muted'>Saved Jobs</Link>
          </div>
      </div>
      <div className="justify-self-auto md:mx-auto sm:mx-auto xs:mx-auto lg:mx-0">
         <h3 className="text-black text-xl font-medium">Employers</h3>
        <div className="flex flex-col gap-2 text-[#2f2d2d] ">
          <Link href="" className='hover:text-muted'>Post a Job</Link>
          <Link href="" className='hover:text-muted'>Browse Candidates</Link>
          <Link href="" className='hover:text-muted'>Employers Dashboard</Link>
          <Link href="" className='hover:text-muted'>Application</Link>
          </div>
      </div>
      <div className="justify-self-auto md:mx-auto sm:mx-auto xs:mx-auto lg:mx-0">
         <h3 className="text-black text-xl font-medium">Support</h3>
        <div className="flex flex-col gap-2 text-[#2f2d2d]">
          <Link href="" className='hover:text-muted'>Faqs</Link>
          <Link href="" className='hover:text-muted'>Privacy Policy</Link>
          <Link href="" className='hover:text-muted'>Terms & Condition</Link>
          <Link href="" className='hover:text-muted'></Link>
          </div>
      </div>

      </section>

      <div className="w-full h-0.5 mt-10 bg-gray-400"></div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3 px-2">
  {/* First div - full width on lg */}
  <div className="text-muted-foreground md:flex-1">
    <p>@ 2026 Jobpilot - Job Portal. All rights Reserved</p>
  </div>

  {/* Second + Third div together */}
  <div className="flex flex-col md:flex-row md:items-center md:gap-6 md:flex-1 md:justify-between">
    <div className="text-muted-foreground">Made by JEET PAL</div>
    <div className="flex gap-4">
      <Link href="" className="text-muted hover:text-pink-500"><Instagram /></Link>
      <Link href="" className="text-muted hover:text-[#0f0f10]"><Github /></Link>
      <Link href="" className="text-muted hover:text-[#1381f7]"><Linkedin /></Link>
    </div>
  </div>
</div>

    </footer>
  )
}

export default Footer