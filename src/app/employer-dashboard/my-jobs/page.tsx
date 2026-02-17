
import EmployerAllJob from '@/src/components/pages/employerAllJob/EmployerAllJob';
import { getMyJobs, } from '@/src/features/auth.queries';

interface Job{
  _id: string,
  title: string,
  location: string
}


const MyJobs = async() => {
const allJob = await getMyJobs();
console.log(allJob)

  return (
    <div className="">
      <h1 className='text-xl font-bold text-center p-2 '>My Job Post</h1>
      <EmployerAllJob data={allJob} />
    </div>
  )
}

export default MyJobs