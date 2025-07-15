"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const picsAPI = "https://picsum.photos/v2/list";
export default function Home() {
  const [pics, setPics] = useState([]);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;

  useEffect(() => {
    const fetchPics = async () => {
      const response = await fetch(`${picsAPI}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setPics(data);
    };
    fetchPics();
  }, [page, limit]);

  return (
    <div>
      <h1>Pictures</h1>
      <p>Welcome to the pics page!</p>
      <ul>
        {pics.map((pic) => (
          <li key={pic.id}>
            <Image
              src={pic.download_url}
              alt={pic.author}
              width={200}
              height={120}
            />
            <p>Author: {pic.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
