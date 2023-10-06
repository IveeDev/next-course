"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import woman from "@/public/images/Photo.jpg";
// import HeavyComponent from "./components/HeavyComponent";
import dynamic from "next/dynamic";
import { useState } from "react";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main className="relative h-screen">
      {/* <h1>Welcome {session && <span>{session?.user!.name}</span>}</h1>
      <Link href="/users">User</Link>
      <ProductCard /> */}
      {/* 
      <Image
        src="https://bit.ly/react-cover"
        fill
        className="object-cover"
        alt="woman"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
      <h1>Hello world</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Show component</button>
      {isVisible && <HeavyComponent />}
    </main>
  );
}
