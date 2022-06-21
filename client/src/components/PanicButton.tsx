import { Box } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";
import PanicImage from "../../public/images/Panikknapp.svg";
import { box_shadow_dark } from "../theme";

const PanicButton: React.FC = () => {
    return (
        <img
            style={{
                position: "fixed",
                zIndex: 999,
                width: "200px",
                right: 0,
            }}
            alt="Panikknapp"
            src={PanicImage.src}
        />
    );
};

export default PanicButton;
