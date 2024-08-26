import { liveblocks } from "@/lib/liveblocks";
import { EmailAddress, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { emit } from "process";





export async function POST(request: Request) {


    const clerkUser = await currentUser();
    if (!clerkUser) redirect('/sign-in')

    const {id, firstName, lastName,imageUrl,emailAddresses} = clerkUser
  // Get the current user from your database
  

  // Identify the user and return the result
    const user = {
        id: clerkUser.id,
        info:{
            id,
            name:`${firstName} ${lastName}`,
            email: emailAddress[0].emailAddress,
            avatar:imageUrl,
            color:""

        }
    }

  return new Response(body, { status });
}