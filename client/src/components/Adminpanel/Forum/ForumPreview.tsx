import {
    Avatar,
    Box,
    Button,
    Flex,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import { userInfo } from "os";
import {
    FaCalendar,
    FaComment,
    FaEdit,
    FaEllipsisV,
    FaPaperclip,
    FaTrash,
    FaUser,
} from "react-icons/fa";
import { ForumPost } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";

interface ForumPreviewProps {
    post: ForumPost;
    onSelect: Function;
    onSelectEdit: Function;
    onDelete?: Function;
}

const ForumPreview: React.FC<ForumPreviewProps> = ({
    post,
    onSelect,
    onSelectEdit,
    onDelete,
}) => {
    const { user, strapi } = useStrapi();

    const deletePost = () => {
        if (
            post.syssnare.id === user?.id &&
            confirm("Vill du ta bort inlägget?")
        ) {
            strapi
                ?.delete("forums", post.id)
                .then((res) => {
                    if (onDelete) onDelete();
                })
                .catch((er) => {
                    console.error(er);
                });
        }
    };
    return (
        <Flex
            cursor={"pointer"}
            backgroundColor={"white"}
            borderRadius={8}
            justifyContent="space-between"
            boxShadow="0px 4px 100px -30px #00000040"
            padding={6}
            maxWidth={"100%"}
        >
            <Flex flexDirection={"column"} onClick={() => onSelect(post)}>
                <Box>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontWeight={800}>{post.title}</Text>
                        {post.files && <FaPaperclip />}
                    </Flex>

                    <Text maxWidth={"90%"}>
                        {post.text.slice(0, 70)}{" "}
                        {post.text.length > 70 && "..."}
                    </Text>
                </Box>
                <Flex gap={5} marginTop={5}>
                    <Flex gap={2} alignItems="center">
                        <Avatar
                            size={"sm"}
                            name={post.syssnare.name}
                            src={post.syssnare.img}
                        />
                        <Text>{post.syssnare.name}</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <FaCalendar color="#00CCEE" />
                        <Text>{post.created_at.slice(0, 10)}</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <FaComment color="#00CCEE" />
                        <Text>{post.comments.length} kommentarer</Text>
                    </Flex>
                </Flex>
            </Flex>
            {post.syssnare.id === user?.id && (
                <Menu>
                    <MenuButton as={Button}>
                        <FaEllipsisV />
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => deletePost()}
                            icon={<FaTrash color="red" />}
                        >
                            Ta bort
                        </MenuItem>
                        <MenuItem
                            onClick={() => onSelectEdit(post)}
                            icon={<FaEdit />}
                        >
                            Redigera
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Flex>
    );
};

export default ForumPreview;
