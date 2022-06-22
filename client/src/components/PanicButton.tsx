import { Box } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import PanicImage from "../../public/images/Panikknapp.png";
import { box_shadow_dark } from "../theme";

const PanicButton: React.FC = () => {
    return (
        <img
            onClick={() =>
                (window.location.href = "https://www.filmstaden.se/")
            }
            style={{
                position: "fixed",
                zIndex: 999,
                width: "200px",
                right: 0,
                cursor: "pointer",
            }}
            alt="Panikknapp"
            src={PanicImage.src}
        />
    );
};

export default PanicButton;
