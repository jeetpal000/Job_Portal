import React from 'react'
import { getCurrentuser } from '../features/auth.queries';
import Link from 'next/link';
import Header from '../components/pages/HomePage/homePageHeader/Header';
import LandingPage from '../components/pages/HomePage/landingPage/LandingPage';
import MostPopularVcancy from '../components/pages/HomePage/mostPopularVacancy/MostPopularVcancy';
import HowToWork from '../components/pages/HomePage/howToWork/HowToWork';
import PopularCategory from '../components/pages/HomePage/popularCategory/PopularCategory';
import FeatureJb from '../components/pages/HomePage/FeatureJob/FeatureJb';
import TopCompanies from '../components/pages/HomePage/topCompanies/TopCompanies';
import ClientsTestimonial from '../components/pages/HomePage/clientsTestimonial/ClientsTestimonial';
import RegisterCard from '../components/pages/HomePage/RegisterCard/RegisterCard';
import Footer from '../components/pages/HomePage/fooer/Footer';


const page = async () => {

  const user = await getCurrentuser();


  return (
    <main className='max-w-360 mx-auto bg-[#e8e8e8]'>
      <Header />
      <LandingPage />
      <MostPopularVcancy />
      <HowToWork />
      <PopularCategory />
      <FeatureJb />
      <TopCompanies />
      <ClientsTestimonial />
      <RegisterCard />
      <Footer />
    </main>
  )
}

export default page