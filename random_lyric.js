"use strict";

const lyricsList = require('./lyrics.json');

const getRandomLyric = () => {
  const randomLyric = lyricsList[Math.floor(Math.random() * lyricsList.length)];
  return { 
    id: randomLyric.id, 
    lyric: randomLyric.lyric
  };
};

module.exports = getRandomLyric;
