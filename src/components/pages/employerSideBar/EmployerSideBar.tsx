"use client"
import { logoutUserAction } from '@/src/features/session/auth.session'
import { cn } from '@/src/lib/utils';
import { Bookmark, Briefcase, Building, CreditCard, LayoutDashboard, LogOut, Plus, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { URLPattern } from 'next/server';



const base = "/employer-dashboard";
const navigationItems = [
    { name: "Overview", icon: LayoutDashboard, href: base + "/" },
    { name: "Employers Profile", icon: User },
    { name: "Post a Job", icon: Plus },
    { name: "My Jobs", icon: Briefcase },
    { name: "Saved Candidate", icon: Bookmark },
    { name: "Plans & Billing", icon: CreditCard },
    { name: "All Companies", icon: Building },
    { name: "Setting", icon: Settings, href: base + "/setting" },
];

const EmployerSideBar = () => {
    const pathname = usePathname();
    function isLinkActive({
        href,
        pathname,
        base="/"
    }:{
        href:string,
        pathname: string,
        base?: string
    }
){
    const normalizedHref = href.replace(/\/$/, "") || "";
    const pattern = new URLPattern({
        pathname: normalizedHref === base? base: `${normalizedHref}{"/*"}?`

    })
    return pattern.test({pathname})
}

    return (
        <div className='flex flex-col border-r-2 border-[#d9f19ed4] shadow-[0_0_10px_#ccc] relative backdrop-blur-2xl'>
            <div className="p-6">
                <h2 className="text-sm font-bold text-muted uppercase tracking-wide">Employer Dashboard</h2>
            </div>





            <nav>

            {
                navigationItems.map((currItem) => {
                    const Icon = currItem.icon
                    return <Link 
                    key={currItem.name} 
                    href={currItem.href || ""}
                    // className='flex gap-1 p-2 text-sm text-muted font-medium hover:bg-gray-200 group hover:text-accent-foreground rounded'

                    className={cn(
                        'flex gap-1 p-2 text-sm text-muted font-medium hover:bg-gray-200 group hover:text-accent-foreground rounded',
                        isLinkActive({
                            href: currItem.href || "#",
                            pathname,
                            base: "/employer-dashboard"
                        }) && "text-accent-foreground group bg-linear-30 from-[#b844f6] via-[#6666fc] to-[white] border-l-3 border-[#ffffff]"
                    )}
                    ><Icon className='group-hover:text-accent-foreground' />{currItem.name}</Link>

                })
            }
            </nav>
            <div>

            <button className='absolute bottom-5 left-0 p-2 cursor-pointer flex hover:bg-gray-200 rounded w-full tracking-wider text-red-400 font-medium' onClick={logoutUserAction}><LogOut /> log-out</button>
            </div>
        </div>
    )
}

export default EmployerSideBar