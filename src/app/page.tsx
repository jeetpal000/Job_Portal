
import { getAllJobs,  } from '../features/auth.queries';
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




interface Job {
  _id: string;
  title: string;
  tags: string;
  workType: string;
  location: string;
  currency: string;
  minSalary: number;
  maxSalary: number;
}
const page = async () => {

  const AllJobData: Job[] = await getAllJobs();
  // console.log(AllJobData);




  return (
    <main className='max-w-360 mx-auto bg-[#e8e8e8]'>
      <Header />
      <LandingPage />
      <MostPopularVcancy />
      <HowToWork />
      <PopularCategory />
      <FeatureJb data={AllJobData} />
      <TopCompanies />
      <ClientsTestimonial />
      <RegisterCard />
      <Footer />
    </main>
  )
}

export default page