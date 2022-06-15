import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Select,
  Text,
} from "@chakra-ui/react";
import DailyIframe from "@daily-co/daily-js";
import { useDaily } from "@daily-co/daily-react-hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaChrome, FaEdge, FaFirefoxBrowser } from "react-icons/fa";

const Chatt: NextPage = () => {
  const router = useRouter();
  const { token } = router.query;
  const [da, setDa] = useState(DailyIframe.createFrame());

  const daily = useDaily();
  console.log(daily);

  useEffect(() => {
    if (!da) return;
    da?.join({ url: "https://boujt.daily.co/8a6Sm94BdLuJ8zoeocq3" });
  }, [da]);

  if (!daily) return <p>hej</p>;

  return <iframe src={da?.iframe().src}></iframe>;
};

export default Chatt;
