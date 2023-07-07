'use client';

import React, { useEffect, useState } from 'react';
import '@/app/styles/styles.css'
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

let textOptions = []; // Initialize the variable in the outer scope

// Define an asynchronous function to load the lyrics
const loadLyrics = async () => {
  const lyricsData = await import('lyrics.json');
  textOptions = lyricsData.default.map(item => item.lyric);
};

const getRandomLyrics = () => {
  return textOptions[Math.floor(Math.random() * textOptions.length)];
};

const RandomLyrics: React.FC = () => {
  const [randomLyrics, setRandomLyrics] = useState('');

  useEffect(() => {
    loadLyrics().then(() => {
      setRandomLyrics(getRandomLyrics());
    });
  }, []);

  return (
    <div className={'randomLyrics'}>
        <h2 className={inter.className}>{randomLyrics}</h2>
    </div>
  );
};

export default RandomLyrics;
