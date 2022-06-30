import { Box, Divider, Flex, Text } from "@chakra-ui/react";

import { defaultStyles, FileIcon } from "react-file-icon";
import { FaDownload, FaEye } from "react-icons/fa";

import { downloadFile } from "../../../utils/helperFunctions";

interface FilePreviewProps {
    file: any;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file }) => {
    return (
        <Flex flexDirection="column" marginTop={4} gap={2}>
            <Flex alignItems={"center"} gap={4}>
                <Box
                    width={50}
                    as="a"
                    target="_blank"
                    href={file.attributes.url}
                >
                    <FileIcon
                        color="#14CFEF"
                        fold
                        {...defaultStyles[file.attributes.ext.substring(1)]}
                        extension={file.attributes.ext}
                    />
                </Box>
                <Flex
                    flexDirection={"column"}
                    justifyContent="space-between"
                    gap={2}
                >
                    <FaDownload
                        cursor={"pointer"}
                        onClick={() =>
                            downloadFile(
                                file.attributes.url,
                                file.attributes.name
                            )
                        }
                        fontSize={20}
                    />
                    <a
                        href={file.attributes.url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaEye fontSize={20} />
                    </a>
                </Flex>
            </Flex>

            <Text>{file.attributes.name}</Text>

            <Divider></Divider>
        </Flex>
    );
};

export default FilePreview;
