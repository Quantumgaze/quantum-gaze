import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      `https://api.replicate.com/v1/predictions/${req.query.id}`,
      {
        headers: {
          Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      const error = await response.json();
      res.statusCode = 500;
      res.json({ detail: error.detail });
      return;
    }

    const prediction = await response.json();
    res.json(prediction);
  } catch (error) {
    console.error("An error occurred:", error);
    res.statusCode = 500;
    res.json({ error: "Internal Server Error" });
  }
}
