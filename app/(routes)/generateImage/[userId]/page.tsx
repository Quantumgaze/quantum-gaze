"use client"

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from "@/app/styles/Home.module.css"

interface Prediction {
  id: string;
  status: 'pending' | 'succeeded' | 'failed';
  output?: string[];
  detail?: string;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/predictions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: (e.target as HTMLFormElement).prompt.value,
      }),
    });

    if (response.status !== 201) {
      const errorData = await response.json();
      setError(errorData.detail);
      return;
    }

    const predictionData = await response.json() as Prediction;
    setPrediction(predictionData);

    while (
      predictionData.status !== 'succeeded' &&
      predictionData.status !== 'failed'
    ) {
      await sleep(1000);
      const statusResponse = await fetch(`/api/predictions/${predictionData.id}`);

      if (statusResponse.status !== 200) {
        const errorData = await statusResponse.json();
        setError(errorData.detail);
        return;
      }

      const updatedPrediction = await statusResponse.json() as Prediction;
      setPrediction(updatedPrediction);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Replicate + Next.js</title>
      </Head>

      <p>
        Dream something with{" "}
        <a href="https://replicate.com/stability-ai/stable-diffusion">SDXL</a>:
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" />
        <button type="submit">Go!</button>
      </form>

      {error && <div>{error}</div>}

      {prediction && (
        <div>
            {prediction.output && (
              <div className={styles.imageWrapper}>
              <Image
                fill
                src={prediction.output[prediction.output.length - 1]}
                alt="output"
                sizes='100vw'
              />
              </div>
            )}
            <p>status: {prediction.status}</p>
        </div>
      )}
    </div>
  );
}