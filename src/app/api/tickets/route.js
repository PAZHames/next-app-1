import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'
// has to be called 'dynamic'



export async function POST(request) {
    const ticket = await request.json()

    // get supabase instance
    const supabase=createRouteHandlerClient()
    
    // get current user session
    const { data: { session }} = await supabase.auth.getSession()

    // insert data
    const { data, error } = await supabase.from('tickets')
    .insert({
        ...ticket,
        user_email: session.user.email
    })
    .select()
    .single()
    // ensure not an array but as a json object 

    return NextResponse.json({ data, error })
}