import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// components
import Navbar from "../components/Navbar";

export default async function DashboardLayout({ children }) {
  const supabase=createServerComponentClient({ cookies })
  // how to get supabase in server components
  const { data } = await suapabase.auth.getSession()
  
  return <>
    <Navbar user= {data.session.user}/>
    {children}
    {/* will be page content */}
  </>
}
