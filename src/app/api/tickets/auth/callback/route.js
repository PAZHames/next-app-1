// function to handle the redirect on the signup page

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request) {
    const url = new URL(request.url)
    const code = url.searchParams.get(`code`)
    // accesses code which confirms that user has verified email address
    if (code) {
        const supabase = createRouteHandlerClient
        await supabase.auth.exchangeCodeForSession(code)
        // supabase returns a new user session using the cookie
    }

    return NextResponse.redirect(url.origin)
    // method - redirects user - pass in where want to redirect them to
}