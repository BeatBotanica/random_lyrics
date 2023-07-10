"use client"

import React, { useEffect, useState } from 'react';
import lyricsList from './lyrics.json'; 

const getRandomLyrics = () => {
  return lyricsList[Math.floor(Math.random() * lyricsList.length)].lyric;
};

const RandomLyrics = () => {
  const [randomLyrics, setRandomLyrics] = useState('');

  useEffect(() => {
    setRandomLyrics(getRandomLyrics());
  }, []);

  return (
    <div className="border border-black rounded-md p-4 flex items-center">
      <div className="bg-gray-200 w-24 h-24 mr-4">
        <h2 className="w-full h-full object-cover">Placeholder</h2>
      </div>
      <div>
        <h2 className="text-lg">{randomLyrics}</h2>
      </div>
    </div>
  );
};

export default RandomLyrics;
