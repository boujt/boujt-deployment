import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import ReactPlayer from "react-player";
import PanicImage from "../../public/images/panicButton.png";
import { PANIC_BUTTON_URL } from "../../utils/constants";
import { box_shadow_dark } from "../theme";

const PanicButton: React.FC = () => {
    const [shouldHide] = useMediaQuery("(max-width: 900px)");

    return shouldHide ? null : (
        <img
            onClick={() => (window.location.href = PANIC_BUTTON_URL)}
            style={{
                position: "fixed",
                zIndex: 999,
                width: "250px",
                right: 0,
                cursor: "pointer",
                boxShadow: "0px 0px -20px 100px",
            }}
            alt="Panikknapp"
            src={PanicImage.src}
        />
    );
};

export default PanicButton;
