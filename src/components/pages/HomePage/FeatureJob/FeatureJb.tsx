import { Button } from '@/src/components/ui/button'
import { ArrowBigRightDash, Banknote, Briefcase, MapPin } from 'lucide-react'
import Image from 'next/image'

const FeatureJb = () => {
  return (
    <section className="bg-[white] py-10 px-2">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold tracking-wide pb-5">
          Feature job
        </h1>
        <Button className='bg-transparent border-2 text-blue-600 flex gap-1 hover:gap-3 hover:bg-transparent hover:shadow-xl'>View All <ArrowBigRightDash /> </Button>
      </div>
      <div className='grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3'>
            {
             [1,2,3,4].map((item, id)=>{
              return <div key={id} className="p-3 border-2 border-[#afafaf] rounded-md shadow-xl flex flex-col gap-3">
      
              <div className="flex justify-between gap-2 ">
                <Image src="https://yt3.ggpht.com/ytc/AIdro_kFzvYt5kK5zhvKTRxXdB4th3a4y0b9zkedbplF6GnyOis=s88-c-k-c0x00ffffff-no-rj" alt="image" width={100} height={100} className='rounded-md' />
                <div className="">
                  <h2 className="text-xl whitespace-nowrap font-medium truncate max-w-fit">title </h2>
                  <p className='text-[#424242]'>Kodifier pvt ltd.</p>
                </div>
              </div>
              <div className=" flex gap-3">
                <span className='px-1 bg-[rgba(0,0,0,0.1)] rounded flex gap-1'><MapPin />location</span>
                <p className='px-1 bg-[rgba(0,0,0,0.1)] rounded flex items-center gap-1 whitespace-nowrap'><Briefcase /><span>worktypwe</span></p>
              </div>
              <div className="">
                <p className='px-1 bg-[rgba(0,0,0,0.1)] rounded flex gap-1'><Banknote />
                {/* {item.currency}{" "}{item.minSalary}{"-"}{item.maxSalary} */}
                USD 5000-9999
                </p>
              </div>
            </div>
              }) 
            } 
          </div>
    </section>
  )
}

export default FeatureJb