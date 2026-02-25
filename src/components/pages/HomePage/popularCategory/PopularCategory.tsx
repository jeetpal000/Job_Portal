import { Button } from '@/src/components/ui/button'
import { ArrowBigRightDash, Building2, Code, DatabaseIcon, Hospital, Monitor, MonitorPlay, Music, PenToolIcon, } from 'lucide-react'
import React from 'react'

const popularCategory = [
  { title: "Graphics & Design", openings: "Open position", icon: PenToolIcon },
  { title: "Code & Programmimg", openings: "Open position", icon: Code },
  { title: "Digital Marketing", openings: "Open position", icon: Monitor },
  { title: "Video & Animation", openings: "Open position", icon: MonitorPlay },
  { title: "Music & Audio", openings: "Open position", icon: Music },
  { title: "Account & Finance", openings: "Open position", icon: Building2 },
  { title: "Health & Care", openings: "Open position", icon: Hospital },
  { title: "Data & Science", openings: "Open position", icon: DatabaseIcon },

]

const PopularCategory = () => {
  return (
    <section className="bg-[white] py-10 px-2">
      <div className="flex justify-between items-center">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold tracking-wide pb-5">
          Popular Category
        </h1>
        <Button className='bg-transparent border-2 text-blue-600 flex gap-1 hover:gap-3 hover:bg-transparent hover:shadow-xl'>View All <ArrowBigRightDash /> </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2  mx-auto place-items-center">
        {
          popularCategory.map((item) =>{
              const Icon = item.icon;
            return <div key={item.title} className="shadow-md p-4 rounded-md flex gap-2 items-center justify-center">
              <Icon className='p-2 w-10 h-10 bg-blue-100 rounded-md text-blue-600' />
              <div className="">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-muted-foreground">78,389 {item.openings}</p>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default PopularCategory