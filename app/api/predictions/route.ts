import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        version: "2b017d9b67edd2ee1401238df49d75da53c523f36e363881e057f5dc3ed3c5b2",
        input: { prompt: req.body.prompt },
      }),
    });

    if (response.status !== 201) {
      const error = await response.json();
      res.statusCode = 500;
      res.json({ detail: error.detail });
      return;
    }

    const prediction = await response.json();
    res.statusCode = 201;
    res.json(prediction);
  } catch (error) {
    console.error("An error occurred:", error);
    res.statusCode = 500;
    res.json({ error: "Internal Server Error" });
  }
}
