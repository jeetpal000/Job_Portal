import { Button } from '@/src/components/ui/button'
import { ArrowBigRightDash, Banknote, Briefcase, MapPin } from 'lucide-react'
import Image from 'next/image'

const TopCompanies = () => {
  return (
    <section className="bg-[white] py-10 px-2">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold tracking-wide pb-5">
          Top Companies
        </h1>
        <Button className='bg-transparent border-2 text-blue-600 flex gap-1 hover:gap-3 hover:bg-transparent hover:shadow-xl'>View All <ArrowBigRightDash /></Button>
      </div>
      <div className='grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3'>
            {/* {
             jobs.map((item)=>{
              return  */}
              <div className="p-3 border-2 border-[#afafaf] rounded-md shadow-xl flex flex-col gap-3">
      
              <div className="flex justify-between gap-2 ">
                <Image src="https://yt3.ggpht.com/ytc/AIdro_kFzvYt5kK5zhvKTRxXdB4th3a4y0b9zkedbplF6GnyOis=s88-c-k-c0x00ffffff-no-rj" alt="image" width={100} height={100} className='rounded-md' />
                <div className="">
                  <h2 className="text-xl whitespace-nowrap font-medium truncate max-w-fit">title </h2>
                  <p className='text-[#424242]'>Kodifier pvt ltd.</p>
                </div>
              </div>
              <Button className='bg-[#c5d8ffdc] text-blue-600 hover:bg-[#b1cdfd] rounded'>Open Positioon(3)</Button>
             
            </div>
             {/* }) 
            } */}
          </div>
    </section>
  )
}

export default TopCompanies