"use client";
import React from "react";
// import Recommendation from "../component/Recommendation";
import Link from "next/link";

export default function Home() {
  const searchQuery = "Romantic Comedy";

  const handleClick = async () => {
    let personalityData = await fetch('/api/personality' , {
      method: 'POST',
      body: JSON.stringify({ keywords : searchQuery})
    })
    personalityData = await personalityData.json();
    console.log('personalityData: ', personalityData);
  }

  return (
    <main>
      <h1 className="flex m-5 p-2 justify-center text-5xl font-bold text-gray-800 mb-4">
        Movie Personality Test
      </h1>

      <Link href="/quiz" className="flex justify-center">
        <button className="px-4 m-2 py-2 rounded bg-blue-500 text-white font-bold">
          Quiz
        </button>
      </Link>
      <Link
        href={{ pathname: "/results", query: searchQuery}}
        className="flex justify-center"
      >
        <button className="px-4 m-2 py-2 rounded bg-blue-500 text-white font-bold">
          Results
        </button>
      </Link>
      {/* <Recommendation searchQuery={searchQuery} /> */}

      <button
        onClick={handleClick}
        className="px-4 m-2 py-2 rounded bg-blue-500 text-white font-bold"
      >
          Send REQUEST to /personality
      </button>
    </main>
  );
}
