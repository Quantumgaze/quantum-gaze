import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
 
export async function POST(req: Request) {
 
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }
 
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }
 
  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);
  
 
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);
 
  let evt: WebhookEvent
 
  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }
  
  // Get the ID and type

function getUserDataFromEvent(evt:WebhookEvent) {
  return {
    clerkUserId: evt.data.id,
    object:evt.data.object
  };
}

async function handleUserCreated(evt:WebhookEvent) {

  const newUser = getUserDataFromEvent(evt);
  console.log(newUser);
//   prisma.logs.create({
//     data:{
//         body:"user created"
//     }
//   })
  

  try {
    
  } catch (err) {
    console.error(`Failed to insert user: ${err}`);
  }
}

async function handleUserUpdated(evt:WebhookEvent) {

  const updatedUser = getUserDataFromEvent(evt);
  console.log(updatedUser);
  
//   prisma.logs.create({
//     data:{
//         body:"user updated"
//     }
//   })
  try {

    console.log("Successfully updated user!");
  } catch (err) {
    console.error(`Failed to update user: ${err}`);
  }
}

async function handleUserDeleted(evt:WebhookEvent) {

    const deletedUser = getUserDataFromEvent(evt);    
    const Logs = await prisma.logs.create({
        data: {
          body:"user deleted"
        }
      })
    try {
  
      console.log("Successfully updated user!");
    } catch (err) {
      console.error(`Failed to update user: ${err}`);
    }
  }
exports = async function syncClerkData(request:NextRequest, response:NextResponse) {

  switch (evt.type) {
    case "user.created":
      await handleUserCreated(evt);
    //   response.status();
      break;
    case "user.updated":
      await handleUserUpdated(evt);
    //   response.setStatusCode(200);
      break;
    case "user.deleted":
      await handleUserDeleted(evt);
    //   response.setStatusCode(200);
      break;
    default:
        prisma.logs.create({
            data:{
                body:"something bad happen"
            }
        })
      console.log(`Unhandled event type: ${evt.type}`);
    //   response.setStatusCode(400);
  }

}
    
}
 