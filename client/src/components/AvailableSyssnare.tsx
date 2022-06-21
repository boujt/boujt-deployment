import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { PuffLoader } from "react-spinners";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { Syssnare } from "../../utils/types";
import { SyssnareItem } from "./SyssnareItem";

interface AvailableSyssnareProps {
    syssnare: Syssnare[];
    onMakeRequest: Function;
}

const AvailableSyssnare: React.FC<AvailableSyssnareProps> = ({
    syssnare,
    onMakeRequest,
}) => {
    return (
        <Flex gap={5} justifyContent="center" wrap={"wrap"}>
            {syssnare.map((sys) => {
                return (
                    <SyssnareItem
                        key={sys.id}
                        syssnare={sys}
                        onCreateRequest={(
                            syssnare: Syssnare,
                            isVideo: boolean
                        ) => onMakeRequest(syssnare, isVideo)}
                    />
                );
            })}
            {syssnare.filter((sys) =>
                [SYSSNARE_STATUS.AVAILABLE, SYSSNARE_STATUS.IN_CALL].includes(
                    sys.status
                )
            ).length === 0 && (
                <Flex
                    width={"100%"}
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                    gap={5}
                >
                    <Text fontSize={25}>Letar efter tillgänliga syssnare</Text>
                    <PuffLoader />
                </Flex>
            )}
        </Flex>
    );
};

export default AvailableSyssnare;
