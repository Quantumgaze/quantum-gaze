import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  )
}
