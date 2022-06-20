import { Box } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

type Props = {
  url: string;
};

const ResponsiveVideoPlayer: React.FC<Props> = ({ url }) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        position: "relative",
        paddingTop: "56.25%",
      }}
    >
      <ReactPlayer
        url={url}
        className="react-player"
        style={{
          overflow: "hidden",
          borderRadius: "8px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default ResponsiveVideoPlayer;
