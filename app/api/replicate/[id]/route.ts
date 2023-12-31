import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";


export async function GET(
    request: NextApiRequest,
    { params }: { params: { id: string } }
) {
    const response = await fetch(
      "https://api.replicate.com/v1/predictions/" + params.id ,
      {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status !== 200) {
      let error = await response.json();
      return NextResponse.json(error)
    }
  
    const prediction = await response.json();
    return NextResponse.json(prediction)
  }