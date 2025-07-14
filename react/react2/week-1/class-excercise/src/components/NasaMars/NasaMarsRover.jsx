"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const API_KEY = "ZGDkbMBjmpKuyJ0DLCgvfvTdW2bWvnD6Eca9t0c7";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=${API_KEY}`,
};

export default function NasaMarsRover() {
  const [roverPhoto, setRoverPhoto] = useState([]);
  async function fetchNasaRoverPhotos() {
  try {
    const response = await fetch(NASA_URLs.marsRoverPhoto);
    const data = await response.json();

    console.log(data);

    const uniqueList = [
      ...new Map(data.photos.map(item => [item.camera.name, item])).values()
    ];

    setRoverPhoto(uniqueList);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
  useEffect(() => {
    fetchNasaRoverPhotos();
  }, []);

  return (
    <>
      {roverPhoto.map((photo) => {
        return (
          <div key={photo.id}>
            <Image src={photo.img_src} height={200} width={200} alt="" />
            <p>{photo.camera.name}</p>
          </div>
        );
      })}
    </>
  );
}
