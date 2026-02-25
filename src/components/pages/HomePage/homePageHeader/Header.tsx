"use client"
import { BriefcaseBusiness, Home, PhoneCall, Search, X } from 'lucide-react'
import Link from 'next/link'
import { FieldLabel } from '../../../ui/field'
import { Controller, useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select"
import { COUNTRY_NAME } from '@/src/config/constant';
import { Input } from '../../../ui/input';
import { usePathname } from 'next/navigation';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';

const base = "";
const navigationItems = [
  { name: "Home", href: base + "/" },
  { name: "Find Job", href: base + "/jobs" },
  { name: "Employers", href: base + "/employer-dashboard" },
  { name: "Candidates", href: base + "/dashboard" },
  { name: "Pricing Plans", href: base + "/pricing" }
];

const Header = () => {
  const pathname = usePathname();
  const [showSearch, setShowSearch] = useState(false);

  function isLinkActive({ href, pathname, base = "" }: { href: string, pathname: string, base?: string }) {
    const normalizedHref = href.replace(/\/$/, "") || "/"; 
    const normalizedPath = pathname.replace(/\/$/, "") || "/";
    if (normalizedHref === "/") {
      return normalizedPath === "/"
    }
    return (
      normalizedPath === normalizedHref || normalizedPath.startsWith(normalizedHref + "/")
    )
  }

  const { control } = useForm({
    defaultValues: {
      country: ""   // default value for the field
    }
  });

  return (
    <header className="">
      {/* Top bar */}
      <div className="flex justify-between items-center py-2 bg-[#e0e0e0]">
        <nav>
          <ul className="flex gap-2">
            {navigationItems.map(item =>
              <li key={item.name} className="text-nowrap text-xs hover:scale-105">
                <Link href={item.href || ""}
                  className={
                    cn('flex gap-1 p-2 text-sm text-black font-medium hover:bg-gray-200 group hover:text-accent-foreground rounded',
                      isLinkActive({
                        href: item.href || "",
                        pathname,
                      }) && "text-accent-foreground group bg-linear-30 from-[#b844f6] via-[#6666fc] to-[white] border-l-3 border-[#ffffff]"
                    )}
                >{item.name}</Link>
              </li>
            )}
          </ul>
        </nav>
        <div className='hidden'>
          <ul className='flex items-center justify-center gap-2'>
            <li className="flex items-center gap-1 text-xs"><PhoneCall className='w-4 h-4' /> +91 8726156494</li>
            <li className="text-xs">
              <select>
                <option value="no-referer">None</option>
                <option value="India">India</option>
                <option value="China">China</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* Main header */}
      <div className="flex justify-between items-center bg-[white] px-2 py-2">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <BriefcaseBusiness className='text-blue-600' />
            <span className='font-bold lg:text-2xl xs:text-xl'>Jobpilot</span>
          </div>

          {/* Search bar (hidden on small screens) */}
          <div className="hidden sm:flex items-center border-2 border-gray-400 rounded focus-within:border-blue-500 focus-within:rounded-full">
            <Controller name="country" control={control} rules={{ required: true }} render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value} required>
                <SelectTrigger className="w-full rounded-none border-0 border-r-2 ">
                  <SelectValue placeholder="India" /> 
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {COUNTRY_NAME.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )} />
            <div className="flex items-center">
              <Search className='text-blue-600' />
              <input 
                type="text"
                placeholder='Job title, keyword, company'
                className='border-none outline-0 px-2 placeholder:text-x'
              />
            </div>
          </div>

          {/* Search icon (only on small screens) */}
          <div className="sm:hidden pl-10">
            <button 
              onClick={() => setShowSearch(true)} 
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 cursor-pointer scale-105"
            >
              <Search className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
        
            <Link href="/login" className='py-2 px-3 hover:shadow-2xl rounded border-blue-400 border font-medium text-blue-500 text-nowrap'>Sign In</Link>
        
            <Link href="/employer-dashboard/jobs"
            className='py-2 px-3 hover:shadow-2xl rounded bg-blue-500 border-blue-400 border font-medium text-white text-nowrap'
            >Post Job</Link>
         
        </div>
      </div>

      {/* Overlay search bar for small devices */}
      {showSearch && (
        <div className="fixed top-10 left-0 w-full bg-white shadow-md hover:shadow-2xl z-50 p-3 transition-transform duration-300 ease-in-out">
          <div className="flex items-center border-2 border-gray-400 rounded focus-within:border-blue-500 focus-within:rounded-full">
            <Controller name="country" control={control} rules={{ required: true }} render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value} required>
                <SelectTrigger className="rounded-none border-0 border-r-2 ">
                  <SelectValue placeholder="India" /> 
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {COUNTRY_NAME.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )} />
            <div className="flex items-center flex-1">
              <Search className='text-blue-600' />
              <input 
                type="text"
                placeholder='Job title, keyword, company'
                className='border-none outline-0 px-2 placeholder:text-x w-full'
              />
            </div>
            <button 
              onClick={() => setShowSearch(false)} 
              className="ml-2 p-2 rounded-full hover:bg-gray-200"
            >
              <X className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
