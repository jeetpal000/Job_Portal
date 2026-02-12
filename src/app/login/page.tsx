"use client"

import Login from '@/src/components/pages/loginPage/Login'
import Register from '@/src/components/pages/register/Register'
import { useState } from 'react'


const Page = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="w-full bg-linear-30 from-[#1616f1be] via-[pink] to-[#63635e] backdrop-blur-2xl min-h-screen"> 
      {isLogin ?
        (
          <div className="flex items-center justify-center p-5">
          <div className="flex items-cente">
            <div className="">
            <Login setIsLogin={setIsLogin} isLogin={isLogin} />
            </div>
            <div className=" bg-[#a79fffb4]">
              <p>Login Here</p>
              </div>            
          </div>
          </div>
      ) :
        (
        <div className="w-180 min-h-[90%] flex justify-between items-center border-2 border-blue-700 rounded-xl p-5">
            <div className="w-[75%]">
           <Register setIsLogin={setIsLogin} isLogin={isLogin} />
            </div>
            <div className="">hello</div>            
          </div>
        
      )
      }
    </div>
  )
}

export default Page