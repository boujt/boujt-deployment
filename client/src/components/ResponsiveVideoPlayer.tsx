import { Box } from "@chakra-ui/react";
import React from "react";
import { FaPlay } from "react-icons/fa";
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
                width: "100%",
            }}
        >
            <ReactPlayer
                light
                playing
                playIcon={
                    <div
                        style={{
                            borderRadius: "8px",
                            backgroundColor: "black",
                            padding: "1rem",
                        }}
                    >
                        <FaPlay size={"2rem"} color="#00CCEE" />
                    </div>
                }
                url={url}
                className="react-player"
                style={{
                    overflow: "hidden",
                    borderRadius: "8px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    border: "1px solid #00CCEE",
                }}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default ResponsiveVideoPlayer;
