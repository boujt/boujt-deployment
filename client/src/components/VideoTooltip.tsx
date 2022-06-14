import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";
import styles from "../style/videotooltip.module.scss";

interface VideoTooltipProps {
  src: string;
  children: JSX.Element;
}

export const VideoTooltip: React.FC<VideoTooltipProps> = ({
  src,
  children,
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Wrapping */}
      {children}
      {show && (
        <div className={`Tooltip-Tip ${"bottom"}`}>
          {/* Content */}
          <img src={src} alt="teckenspråk" />
        </div>
      )}
    </div>
  );
};
