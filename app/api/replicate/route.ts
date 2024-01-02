import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:Request){
    const req = await request.json();
    
    
    const response = await fetch("https://api.replicate.com/v1/predictions", {
        method: "POST",
        headers: {
            Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            version: "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",
            input: { prompt: req.prompt}
        }),
    });
    if(response.status!==201){
        let error = await response.json();
        return NextResponse.json(error)
    }
    const prediction = await response.json();
    return NextResponse.json(prediction)
}