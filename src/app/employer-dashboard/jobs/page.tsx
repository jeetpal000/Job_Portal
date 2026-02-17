import JobForm from '@/src/components/pages/jobPostorm/JobForm'

const JobPost = () => {
  return (
    <div className='p-2'>
    <h1 className='pl-10 pt-5  font-medium text-2xl'>Post a new Job</h1>
    <JobForm />
    </div>
  )
}

export default JobPost