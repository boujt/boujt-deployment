import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { generateToken } from "../../utils/helperFunctions";
import { doGetAllSyssnare, doGetChatRoomFromToken } from "../../utils/service";
import { Syssnare } from "../../utils/types";
import { LiveChat } from "../components/LiveChat";

export default function Chat() {
  const [url, setURL] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [name, setName] = useState<string>("Gustaf");
  const [join, setJoin] = useState<boolean>(false);
  const [syssnare, setSyssnare] = useState<Syssnare[]>([]);

  useEffect(() => {
    doGetAllSyssnare().then((res) => {
      setSyssnare(res.data);
    });
  }, []);

  const createChatRequest = (syssnareID: number, isVideo: boolean) => {
    const token = generateToken();
    const data = {
      token: token,
      is_video: isVideo,
      syssnare: syssnareID,
    };
    axios
      .post("/api/chat-request/create", data)
      .then((res) => {
        console.log(res);
        setToken(token);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  useEffect(() => {
    const myInterval = setInterval(async function () {
      if (!token) return;
      doGetChatRoomFromToken(token)
        .then((res) => {
          console.log(res);
          setURL(res.data.data.url);
        })
        .catch((er) => {});
    }, 2000);
    return () => clearInterval(myInterval);
  }, []);

  return (
    <div>
      {syssnare.map((sys) => {
        if (sys.status === SYSSNARE_STATUS.OFFLINE) return null;
        return (
          <Flex key={sys.id}>
            <Text>{sys.name}</Text>
            <Button onClick={() => createChatRequest(sys.id, false)}>
              Chatt
            </Button>
            <Button onClick={() => createChatRequest(sys.id, true)}>
              Video
            </Button>
          </Flex>
        );
      })}
      {url !== "" && <Button onClick={() => setJoin(true)}>Join room</Button>}

      {join && url !== "" && name.trim() !== "" && (
        <LiveChat
          roomID={url}
          displayName={name}
          onLeave={() => setJoin(false)}
        />
      )}
    </div>
  );
}
