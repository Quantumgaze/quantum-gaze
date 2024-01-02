import { Webhook } from "svix";
import { headers } from "next/headers";
import type { WebhookEvent } from "@clerk/clerk-sdk-node";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent; 
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  async function handleSession(evt:WebhookEvent){
    if(evt?.data) console.log(evt.data.id + " is active");
  }

  async function handleUserCreated(evt:any) {
    try {
        await prisma.user.create({
            data:{
                clarkUserId:evt.data.id,
                email: evt.data.email_addresses[0].email_address,
                username: evt.data.username
            }
        });

    } catch (err) {
      console.error(`Failed to insert user: ${err}`);
    }
  }

  async function handleUserUpdated(evt: any) {
    try {
        await prisma.user.update({
            where: { clarkUserId: evt.data.id },
            data: {
                username: evt.data.username
            }
        });
    } catch (err) {
      console.error(`Failed to update user: ${err}`);
    }
  }

  async function handleUserDeleted(evt: WebhookEvent) {
    try {
        await prisma.user.delete({
            where: { clarkUserId: evt.data.id }
        }); 
    } catch (err) {
      console.error(`Failed to update user: ${err}`);
    }
  }
  
  async function syncClerkData() {
    switch (evt.type) {
      case "session.created":
        await handleSession(evt);
        break;
      case "user.created":
        await handleUserCreated(evt);
        break;
      case "user.updated":
        await handleUserUpdated(evt);
        break;
      case "user.deleted":
        await handleUserDeleted(evt);
        break;
      default:
        console.log(`Unhandled event type: ${evt.type}`);
    }
  }
  syncClerkData();
  return new Response("", { status: 200 });
}
