import { Box } from "@chakra-ui/react";
import React from "react";

const style: React.CSSProperties = {
    borderRadius: '20px',
    WebkitBorderRadius: '20px',
    overflow: 'hidden',
}

type Props = {
    url: string,
    width: number,
    height: number,
    style?: React.CSSProperties
}

const Video: React.FC<Props> = (props) => {
    return (
        <Box sx={{...style, ...props.style}}>
            <iframe 
                id="player" width={props.width} height={props.height}
                src={props.url}
            />
        </Box>
    )
}

export default Video;