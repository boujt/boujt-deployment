import { Button, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { LiveChat } from "../components/LiveChat";

export default function Chat() {
  const [url, setURL] = useState<string>(
    "https://boujt.daily.co/RPSXsQLDE1U1BSnRBOtG"
  );
  const [name, setName] = useState<string>("");
  const [join, setJoin] = useState<boolean>(false);
  const createChatRoom = () => {
    axios
      .post("/api/chat_room/create")
      .then((res) => {
        setURL(res.data.url);
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
      <Button onClick={() => setJoin(true)}>Join chat</Button>

      {join && url !== "" && name.trim() !== "" && (
        <LiveChat roomID={url} displayName={name} />
      )}
    </div>
  );
}
