import { Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import PanicImage from "../../public/images/Panikknapp.png";
import { box_shadow_dark } from "../theme";

const PanicButton: React.FC = () => {
    const [shouldHide] = useMediaQuery("(max-width: 900px)");
    return shouldHide ? null : (
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
