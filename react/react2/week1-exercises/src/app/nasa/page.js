"use client";
import React, { useState, useEffect } from "react";
const API_KEY = "73aD7WnDKpInnAFT4Uduw7gWJSY4FT4BhsTW61O2";
const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export default function NasaPage() {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };
    const fetchDailyImg = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };

    fetchRoverPhotos();
    fetchDailyImg();
  }, []);

  return (
    <div>
      <h1>NASA Page</h1>
      <p>Welcome to the NASA page!</p>

      <section>
        <h2>Astronomy Picture of the Day</h2>
        {dailyImg.url ? (
          <div>
            <img
              src={dailyImg.url}
              alt={dailyImg.title}
              style={{ maxWidth: "400px" }}
            />
            <h3>{dailyImg.title}</h3>
            <p>{dailyImg.explanation}</p>
          </div>
        ) : (
          <p>Loading Astronomy Picture of the Day...</p>
        )}
      </section>

      <section>
        <h2>Mars Rover Photos</h2>
        {roverPhoto.photos && roverPhoto.photos.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {roverPhoto.photos.slice(0, 5).map((photo) => (
              <div key={photo.id}>
                <img
                  src={photo.img_src}
                  alt="Mars Rover"
                  style={{ width: "200px" }}
                />
                <div>
                  <strong>{photo.rover.name}</strong> - {photo.earth_date}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading Mars Rover photos...</p>
        )}
      </section>
    </div>
  );
}
