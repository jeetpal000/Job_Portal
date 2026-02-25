import type { Metadata } from "next";
import { getCurrentuser } from "@/src/features/auth.queries";
import { redirect } from "next/navigation";

import ApplicantSideBar from "@/src/components/pages/applicantSidebar/ApplicantSidebar";
import Header from "@/src/components/pages/HomePage/homePageHeader/Header";



export const metadata: Metadata = {
  title: "Job | Portal | App | Applicant-Dashboard",
  description: "Job Portal App Full Stack Project",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getCurrentuser();
  if (!user) return redirect("/login");
  // console.log("users",user)
  if (user?.user?.role !== "applicant") return redirect("/employer-dashboard");

  return (
    <>
      {/* <Header /> */}
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="flex w-full min-h-screen bg-linear-100 to-pink-500 via-green-500 from-blue-500 relative">

          <ApplicantSideBar />
          <main className="w-full">{children}</main>
        </div>
      </div>
    </>
  )

}
