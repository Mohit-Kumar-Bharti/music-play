import React from "react";
import "./style.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import MusicList from "./MusicList";
import Chart from "./Chart.js";

const Music = ({ songs, index }) => {
  console.log("inside music now");
  console.log(index);
  console.log(songs, index);
  const [isPlaying, setIsPlaying] = useState(false);
  const [curIndex, setCurIndex] = useState(index);
  const [showHome, setShowHome] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const handleHomeButton = () => {
    setShowHome(true);
  };

  if (showHome) {
    return <MusicList />;
  }

  const handleChartButton = () => {
    setShowChart(true);
  };

  if (showChart) {
    return <Chart />;
  }

  const songDetails = songs[curIndex];
  console.log("hum bhi rerender hue");
  const classes = [];
  classes.push("fas");
  classes.push("main_button");
  if (!isPlaying) {
    classes.push("fa-play");
  } else {
    classes.push("fa-pause");
  }

  return (
    <>
      <button className="custom-btn btn-6" onClick={handleHomeButton}>
        Go to Home
      </button>
      <button className="custom-btn btn-6" onClick={handleChartButton}>
        Go to Charts
      </button>

      <div className="main_div">
        <div className="music_container">
          <h2 id="title">{songDetails.name}</h2>
          <h3 id="artist">{songDetails.singer}</h3>
          <div className="img_container">
            <img src={`images/mohit-${curIndex + 1}.jpg`} alt="sry" />
          </div>

          {console.log(curIndex, "curidx hai ")}
          {/* <audio src="songs/mohit-1.mp3"></audio> */}
          <audio src={`songs/mohit-${curIndex + 1}.mp3`}></audio>

          <div className="music_controls">
            <i
              className="fas fa-backward"
              onClick={(event) => {
                console.log("hum hain line 35");
                setIsPlaying(false);
                setCurIndex((curIndex - 1 + songs.length) % songs.length);
              }}
              id="prev"
              title="Previous"
            ></i>
            {console.log("line 41 is playing", isPlaying)}
            {console.log("hum line 39 hain ", isPlaying)}
            <i
              //   className="fas fa-play main_button"
              className={classes.join(" ")}
              onClick={(event) => {
                if (isPlaying == false) {
                  const music = document.querySelector("audio");
                  music.play();

                  event.currentTarget.classList.remove("fa-play");
                  event.currentTarget.classList.add("fa-pause");
                  setIsPlaying(true);
                  console.log("I am 53");
                } else {
                  const music = document.querySelector("audio");
                  music.pause();

                  event.currentTarget.classList.add("fa-play");
                  event.currentTarget.classList.remove("fa-pause");
                  setIsPlaying(false);
                }
              }}
              id="play"
              title="Play"
            ></i>
            <i
              className="fas fa-forward"
              onClick={(event) => {
                setIsPlaying(false);
                setCurIndex((curIndex + 1) % songs.length);
              }}
              id="next"
              title="Next"
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
