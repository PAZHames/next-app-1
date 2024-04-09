import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// components
import Navbar from "../components/Navbar";


export default async function DashboardLayout({ children }) {
  const supabase=createServerComponentClient({ cookies })
  // how to get supabase in server components
  const { data } = await suapabase.auth.getSession()

  if (!data.session) {
    redirect('/login')
    // used instead of router as this is server rather than client component 
  }
  
  return <>
    <Navbar user= {data.session.user}/>
    {children}
    {/* will be page content */}
  </>
}
