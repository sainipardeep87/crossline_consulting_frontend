import React from "react";
import ReactPlayer from 'react-player'

export default function YouTubePlayer() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <ReactPlayer src='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
    </div>
  );
}