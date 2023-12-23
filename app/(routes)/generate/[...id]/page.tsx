'use client';
export default function page({ params }: { params: { id: string } }) {

    return (
    <div>
      {params.id}
    </div>
    )
}
