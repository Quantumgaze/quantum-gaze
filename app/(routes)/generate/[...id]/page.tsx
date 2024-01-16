'use client';
import React, { useEffect } from 'react'
export default function page({ params }: { params: { id: string } }) {
    useEffect(()=>{
    
    },[])
    return (
    <div>
      {params.id}
    </div>
    )
}
