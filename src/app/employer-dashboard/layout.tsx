import type { Metadata } from "next";
import { getCurrentuser } from "@/src/features/auth.queries";
import { redirect } from "next/navigation";
import EmployerSideBar from "@/src/components/pages/employerSideBar/EmployerSideBar";



export const metadata: Metadata = {
  title: "Job | Portal | App | Employer-Dashboard",
  description: "Job Portal App Full Stack Project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const user = await getCurrentuser();
    if(!user) return redirect("/login");
    // console.log("users",user)
    if(user?.user?.role!== "employer") return redirect("/dashboard");

  return (
    <>
    {/* <Header /> */}
    <div className="flex w-full min-h-screen bg-linear-100 to-pink-500 via-green-500 from-blue-500 relative">
      <EmployerSideBar />
      <main className="w-full">{children}</main>
    </div>
    </>
  )
  
}
