import { Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { generateToken } from "../../utils/helperFunctions";
import { LiveChat } from "../components/LiveChat";

export default function Chat() {
  const [url, setURL] = useState<string>(
    "https://boujt.daily.co/dUoR44TTaqchbF3svlKc"
  );
  const [name, setName] = useState<string>("");
  const [join, setJoin] = useState<boolean>(false);
  const createChatRoom = () => {
    axios
      .post("/api/chat_room/create")
      .then((res) => {
        setURL(res.data.url);
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const createChatRequest = () => {
    const data = {
      token: generateToken(),
      is_video: true,
      syssnare: 1,
    };
    axios
      .post("/api/chat-request/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  return (
    <div>
      <Button onClick={() => createChatRoom()}>Create room</Button>
      {url !== "" && <Text>{url}</Text>}
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Button
        backgroundColor={"turquoise"}
        variant={"solid"}
        colorScheme={"turquoise"}
        onClick={() => setJoin(true)}
      >
        Join chat
      </Button>
      <Button onClick={() => createChatRequest()}>Skicka förfrågan</Button>
      <Button onClick={() => console.log(generateToken())}>Token</Button>

      {join && url !== "" && name.trim() !== "" && (
        <LiveChat roomID={url} displayName={name} />
      )}
    </div>
  );
}
