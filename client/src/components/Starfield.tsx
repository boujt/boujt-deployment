import { Box, BoxProps } from "@chakra-ui/react";
import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { chakra_gradient } from "../theme";

type Star = {
    x: number;
    y: number;
    timeAlive: number;
    decay: number;
};

const MAX_TIME_ALIVE = 110;
const DECAY_RANGE = 1;
const SIZE = 1;

const makeStars = (count: number, width: number, height: number): Star[] => {
    const out: Star[] = [];
    for (let i = 0; i < count; i++) {
        const s = {
            x: Math.random() * width,
            y: Math.random() * height,
            timeAlive: 0,
            decay: 10000,
        };
        out.push(s);
    }
    return out;
};

interface StarfieldProps {
    sx?: CSSProperties;
    boxProps?: BoxProps;
    starCount?: number;
}

const Starfield: React.FC<StarfieldProps> = ({ sx, boxProps, starCount }) => {
    const myCanvas = useRef<HTMLCanvasElement>(null);
    const myParent = useRef<HTMLDivElement>(null);
    const stars = useRef<Star[]>(makeStars(starCount ? starCount : 80, 0, 0));

    const animate = () => {
        const w = myParent.current!.clientWidth;
        const h = myParent.current!.clientHeight;

        updateStars(w, h);
        clear();

        for (let i = 0; i < stars.current.length; i++) {
            const star = stars.current[i];
            const x = star.x;
            const y = star.y;

            if (x < 0 || x >= w || y < 0 || y >= h) {
                continue;
            }

            // z-distance squared is alpha of our star
            const b = 1 - star.timeAlive / MAX_TIME_ALIVE;
            putPixel(star, b < 0 ? 0 : b);
        }
    };

    const updateStars = (width: number, height: number) => {
        const copy = [...stars.current];
        for (let i = 0; i < stars.current.length; i++) {
            const s = copy[i];

            let pos = {
                x: s.x,
                y: s.y,
            };
            s.timeAlive += s.decay;

            if (s.timeAlive > MAX_TIME_ALIVE) {
                pos.x = Math.random() * width;
                pos.y = Math.random() * height;
                s.decay = Math.random() * DECAY_RANGE;
                s.timeAlive = 0;
            }

            copy[i] = {
                x: pos.x,
                y: pos.y,
                timeAlive: s.timeAlive,
                decay: s.decay,
            };
        }

        stars.current = copy;
    };

    const clear = () => {
        if (!myCanvas.current) return;

        const c = myCanvas.current.getContext("2d");
        let gradient = c?.createLinearGradient(
            0,
            0,
            0,
            myParent.current!.clientHeight
        );
        gradient?.addColorStop(0, "#112640");
        gradient?.addColorStop(1, "#34569A");

        c!.fillStyle = gradient!;
        c!.fillRect(0, 0, myCanvas.current!.width, myCanvas.current!.height);
    };

    const putPixel = (star: Star, brightness: number) => {
        if (!myCanvas.current) return;

        const intensity = 255;
        const rgba =
            "rgba(" +
            intensity +
            "," +
            intensity +
            "," +
            intensity +
            "," +
            brightness +
            ")";
        const c = myCanvas.current.getContext("2d");

        const size = SIZE;
        c!.beginPath();
        c!.fillStyle = rgba;
        c!.arc(star.x, star.y, size, 0, 2 * Math.PI);
        c!.fill();
    };

    useEffect(() => {
        if (!myCanvas.current || !myParent.current) return;

        const setCanvasExtents = () => {
            myCanvas.current!.width = myParent.current!.clientWidth;
            myCanvas.current!.height = myParent.current!.clientHeight;
        };

        setCanvasExtents();
        window.addEventListener("resize", setCanvasExtents);

        const ticker = setInterval(() => {
            animate();
        }, 32);

        // Destructing
        return () => {
            window.removeEventListener("resize", setCanvasExtents);
            clearInterval(ticker);
        };
    }, [myCanvas, myParent]);

    return (
        <Box
            bgGradient={chakra_gradient}
            ref={myParent}
            width="100%"
            height="100%"
            {...boxProps}
        >
            <canvas
                ref={myCanvas}
                id="canvas"
                style={{
                    ...sx,
                    width: "100%",
                    height: "100%",
                    padding: 0,
                    margin: 0,
                }}
            ></canvas>
        </Box>
    );
};

export default Starfield;
