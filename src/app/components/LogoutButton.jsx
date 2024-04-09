"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function LogoutButton() {

    const router = useRouter()
    const handleLogout = async () => {
        const supabase = createClientComponentClient()
        const { error } = await supabase.auth.signOut()
        // will sign user out and get rid of the cookie
    

        if (!error) {
            router.push('/login')
        }
        if (error) {
            console.log(error)
        }
    }
  return (
    <button className="btn-primary" onclick={handleLogout}>
        Logout
    </button>
  )
}
