import { CircleCheckBig, CloudUpload, UserRoundPlus, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HowToWork = () => {
  return (
   <section className="py-10 overflow-hidden">
    <h1 className="lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold tracking-wide text-center pb-5 mx-auto">How to Jobpilot work</h1>
    <div className="grid grid-rows-4 place-items-center lg:grid-cols-4 lg:grid-rows-none xl:grid-rows-none xl:grid-cols-4">
      <div className="max-w-60 shadow-2xl rounded-md p-2 relative">
        <div className="flex flex-col items-center justify-center">
          <UserRoundPlus className='bg-[#fff] p-2 w-15 h-15 rounded-full text-[#0077ff]' />
          <h3 className="text-xl font-bold pt-5">Create account</h3>
          <p className="text-muted-foreground">Aliquam facilisis egestas sapien, nec tempor leo tristique at</p>
        </div>
      <div className="absolute lg:w-full xl:w-full lg:h-20 xl:h-20 xl:-top-20 lg:-top-15 xl:rotate-0 lg:rotate-0 lg:left-40 z-1 lg:h-36 xl:h-44 top-10 rotate-90 left-39 h-50 w-50 ">
        <Image
          src="/Arrows.png"
          alt="arrow"
          fill
          className="object-contain"
        />
</div>

      </div>
      <div className="max-w-60 rounded-md shadow-2xs bg-[white] p-2 relative">
        <div className="flex flex-col items-center justify-center">
          <CloudUpload className='bg-[#0077ff] p-2 w-15 h-15 rounded-full text-white' />
          <h3 className="text-xl font-bold pt-5">Upload CV/Resume</h3>
          <p className="text-muted-foreground">Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales</p>
        </div>
      <div className="absolute lg:w-full xl:w-full lg:h-20 xl:h-20 xl:-top-2 lg:top-3 xl:rotate-0 lg:rotate-0 lg:left-40 z-1 lg:h-36 xl:h-44 top-10 rotate-90 -left-30 h-50 w-50 ">
      <Image
        src="/Arrows(1).png"
        alt="arrow"
        fill
        className="object-contain"
        sizes="(max-width: 640px) 120px,
            (max-width: 768px) 200px,
            (max-width: 1024px) 300px,
            400px"
        />
      </div>
      </div>
      <div className="max-w-60 shadow-2xl rounded-md p-2 relative">
        <div className="flex flex-col items-center justify-center ">
          <ZoomIn className='bg-[#fff] p-2 w-15 h-15 rounded-full text-[#0077ff]' />
           <h3 className="text-xl font-bold">Find suitable job</h3>
          <p className="text-muted-foreground">Phasellus quis eleifend ex. Morbi nec fringilla nibh.</p>
        </div>
      <div className="absolute lg:w-full xl:w-full lg:h-20 xl:h-20 xl:-top-20 lg:-top-15 xl:rotate-0 lg:rotate-0 lg:left-40 z-1 lg:h-36 xl:h-44 top-10 rotate-90 left-39 h-50 w-50 ">
    <Image
      src="/Arrows.png"
      alt="arrow"
      fill
      className="object-contain"
      sizes="(max-width: 640px) 120px,
           (max-width: 768px) 200px,
           (max-width: 1024px) 300px,
           400px"
  />
</div>
      </div>
      <div className="max-w-60 shadow-2xl rounded-md p-2">
        <div className="flex flex-col items-center justify-center">
           <CircleCheckBig className='bg-[#fff] p-2 w-15 h-15 rounded-full text-[#0077ff]' />
           <h3 className="text-xl font-bold">Apply job</h3>
          <p className="text-muted-foreground">Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.</p>
        </div>
      </div>
      <div>
    </div>
    </div>
   </section>
  )
}

export default HowToWork