import React from 'react'
import { getCurrentuser } from '../features/auth.queries';

const page = async() => {

const user =  await getCurrentuser();
// console.log("user", user)

  return (
    <div>Home page
      <p>
       email:  {user?.user.email}
      </p>
      <p>
       name:  {user?.user.name}
      </p>
    </div>
  )
}

export default page