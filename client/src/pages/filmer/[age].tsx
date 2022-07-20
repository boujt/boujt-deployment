import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useData } from "../../../utils/fetchData";
import { MovieData } from "../../../utils/types";
import BoujtTemplate from "../../components/BoujtTemplate";
import VideoCard from "../../components/VideoCard";
import { chakra_gradient } from "../../theme";

const Filmer: NextPage = () => {
    const router = useRouter();
    const age = router.query.age as string;

    // Make call for data
    const { data, error } = useData<MovieData[]>("filmer/" + age);

    /*
        Prepare data
    */
    const headingText =
        age == "7"
            ? "Våra filmer för dig som är 7-14"
            : "Våra filmer för di som är 15-21";

    return (
        <BoujtTemplate gap={50}>
            <Head>
                <title>Våra filmer</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Heading
                textAlign={"center"}
                bgGradient={chakra_gradient}
                bgClip={"text"}
            >
                {headingText}
            </Heading>
            {/* Render the video cards */}
            <>
                {data &&
                    data.map((video, idx) => {
                        return (
                            <VideoCard
                                video={video}
                                backgroundColor={
                                    idx % 3 == 0
                                        ? "red"
                                        : idx % 2 == 0
                                        ? "#36569B"
                                        : "#181818"
                                }
                                key={idx}
                            />
                        );
                    })}
            </>
        </BoujtTemplate>
    );
};

export default Filmer;
