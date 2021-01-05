import React from "react";
import Youtube from "react-youtube";
// import Style from "./VideoPlay.module.scss";

const VideoPlay = ({ id }) => {
  return (
    <>
      <Youtube videoId={id} />
    </>
  );
};

export default VideoPlay;
