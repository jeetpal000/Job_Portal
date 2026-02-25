import { Button } from '@/src/components/ui/button'
import { BriefcaseBusiness, Building2, MapPin, Search, UsersRound } from 'lucide-react'
import Image from 'next/image'

const LandingPage = () => {
  return (
    <main className="w-full p-2 pb-10">
      <section className="flex justify-between items-center pt-10 w-full">
        <aside className='flex flex-col w-[60%]'>
          <h1 className="lg:text-7xl md:text-5xl sm:text-3xl xs:text-2xl font-bold ">
            Find a job that suits your interest & skills.
          </h1>
          <p className="text-[#6d6d6d] py-6">Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
          <div className="lg:flex lg:border-3 border-[#bcbabad0] rounded-md lg:items-center lg:justify-between lg:p-2  md:flex-wrap md:items-start md:justify-start md:border-0  focus-within:border-blue-500 focus-within:rounded-full group">
            <div className="flex items-center justify-center gap-1 border-2 border-blue-200 focus:border-blue-500 rounded-md w-fit lg:border-0">
              <Search className='text-blue-600' />
              <input
                type="text"
                placeholder='Job search'
                className="outline-0 border-0 text-xl"
              />
             </div>
            <div className="flex items-center justify-center gap-1 border-2 border-blue-200 rounded-md w-fit lg:border-l-2 lg:border-t-0 lg:border-b-0 lg:border-r-0 lg:rounded-none lg:border-[#c2c2c2]">
              <MapPin className='text-blue-600' />
              <input
                type="text"
                placeholder='Location'
                className="outline-0 border-0 text-xl "
              />
            </div>
            <div className="flex items-center justify-center gap-1 w-fit">
              <Button className='bg-blue-500 text-xl group-focus-within:rounded-full transition duration-0'>Find Job</Button>
            </div>
          </div>
          <p className="py-4">Suggestion <span className=""> Designer Programming,</span> <span className=""> Digital Marketing,</span> Videos Animation.</p>
        </aside>
        <aside className=''>
          <div className="">
            <Image
              src="/Illustration.png"
              alt="dfh"
              width={400}
              height={400}
            />
          </div>
        </aside>
      </section>
      <section className='grid lg:grid-cols-4 md:grid-cols-4 sm: grid-cols-2 xs:grid-cols-2 gap-4 mx-auto '>
        <div className="flex items-center justify-center gap-3 bg-blue-200 py-5 rounded-md">
          <BriefcaseBusiness className='text-blue-600 w-15 h-15' />
          <div className="">
            <h1 className="text-2xl font-bold">{(175324).toLocaleString("en-IN")}</h1>
            <p className="">Live Job</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-blue-200 p-4 rounded-md">
          <Building2 className='text-blue-600 w-15 h-15' />
          <div className="">
            <h1 className="text-2xl font-bold">{(175324).toLocaleString("en-IN")}</h1>
            <p className="">Live Job</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-blue-200 p-4 rounded-md">
          <UsersRound className='text-blue-600 w-15 h-15' />
          <div className="">
            <h1 className="text-2xl font-bold">{(175324).toLocaleString("en-IN")}</h1>
            <p className="">Live Job</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-blue-200 p-4 rounded-md">
          <BriefcaseBusiness className='text-blue-600 w-15 h-15' />
          <div className="">
            <h1 className="text-2xl font-bold">{(175324).toLocaleString("en-IN")}</h1>
            <p className="">Live Job</p>
          </div>
        </div>
      </section>
    </main>
  )
};

export default LandingPage