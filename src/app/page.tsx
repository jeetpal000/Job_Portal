import React from 'react'
import { getCurrentuser } from '../features/auth.queries';
import Link from 'next/link';
import Header from '../components/pages/header/Header';

const page = async () => {

  const user = await getCurrentuser();
  // console.log("user", user)

  return (
    <main className='bg-linear-60 from-[gray] via-[pink] to-[orange] w-full h-screen '>
      <Header />
    <div className='flex items-center justify-center flex-col'>
      <p className='justify-start font-bold'>
        email:  {user?.user.email}
      </p>
      <p className='justify-start font-bold'>
        name:  {user?.user.name}
      </p>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
    </main>
  )
}

export default page