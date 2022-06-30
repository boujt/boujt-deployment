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
                (window.location.href =
                    "https://www.google.com/search?q=youtube&ei=ePS9YuCXA_69xc8PxteyuAQ&ved=0ahUKEwjgs7Pc79X4AhX-XvEDHcarDEcQ4dUDCA4&uact=5&oq=youtube&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIICAAQgAQQsQMyCwgAEIAEELEDEIMBOgcIABBHELADOgcIABCwAxBDOgoIABDkAhCwAxgBOhIILhDHARCvARDIAxCwAxBDGAI6BQguEIAEOgsILhCABBDHARCvAToICC4QgAQQsQM6CwguEIAEELEDEIMBOggILhCABBDUAjoOCC4QgAQQsQMQxwEQrwFKBAhBGABKBAhGGAFQqQVYkgpg8gpoAXABeACAAUmIAZADkgEBN5gBAKABAcgBE8ABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz")
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
