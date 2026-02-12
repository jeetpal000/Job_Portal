import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4'>
        <div className=""><Link href={"/"}>Logo</Link></div>
        <nav>
            <ul className='flex gap-7'>
                <li><Link href={"/dashboard"}>Applicant</Link></li>
                <li><Link href={"/employer-dashboard"}>Employer Dashboard</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header