"use client"
import { QuoteIcon } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const ClientsTestimonial = () => {
  return (
    <section className="px-2 py-10">
      <h1 className="lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl font-bold tracking-wide text-center pb-5 mx-auto">
        Clients Testimonial
      </h1>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },   // tablet par 2
          1024: { slidesPerView: 3 },  // desktop par 3
        }}
        className="max-w-5xl overflow-hidden"
      >
        {[1,2,3,4,5,6,7,8,9].map((item, i) => (
          <SwiperSlide key={i}>
            <div className="p-6 border rounded-lg shadow-md bg-linear-135 from-[#b8b8b8] 120% hover:shadow-2xl hover:scale-98 transition-all duration-300">
              <div>⭐⭐⭐⭐⭐</div>
              <p className="mt-2 text-gray-600">
                “Class aptent taciti sociosqu ad litora torquent per conubia nostra...”
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 items-center">
                  <Image src="/vercel.svg" alt="alt" height={40} width={40} 
                  className="rounded-full shadow-xln border"
                  />
                  <div>
                    <h5 className="font-semibold">Jane Cooper</h5>
                    <p className="text-sm text-gray-500">Photographer</p>
                  </div>
                </div>
                <QuoteIcon className="text-[#979797] w-15 h-15" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ClientsTestimonial
