"use client";

import { useEffect, useState } from "react";
const API_KEY = 'ZGDkbMBjmpKuyJ0DLCgvfvTdW2bWvnD6Eca9t0c7';

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export default function Nasa() {


  const [nasaData, setNasaData] = useState(null);
  async function fetchNasaData() {
    return response = await fetch(NASA_URLs.marsRoverPhoto)
      .then((response) => response.json())
      .then((data) => setNasaData(data.photos))
     
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    
    fetchNasaData();
  }, []);
  console.log("Fetched NASA data:", nasaData);

  return <>
Data : {nasaData?.map((photo) => (
    <div key={photo.id}
    >
        <h2>{photo.rover.name} - {photo.earth_date}</h2>
        <img src={photo.img_src} alt={`Mars Rover Photo ${photo.id}`} />
        <p>Camera: {photo.camera.full_name}</p>
        </div>
    ))}
  </>;
}
