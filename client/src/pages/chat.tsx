import { Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaComment, FaVideo } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { generateToken } from "../../utils/helperFunctions";
import {
  doCreateChatRequest,
  doGetAllSyssnare,
  doGetChatRoomFromToken,
  doGetRequestByToken,
} from "../../utils/service";
import { Syssnare } from "../../utils/types";
import { LiveChat } from "../components/LiveChat";
import { SyssnareItem } from "../components/SyssnareItem";
import { WaitForRequest } from "../components/WaitForRequest";

export default function Chat() {
  const [url, setURL] = useState<string>("");
  const [requestData, setRequestData] = useState<{
    token: string | null;
    syssnare: Syssnare | null;
  }>({ token: null, syssnare: null });
  const [name, setName] = useState<string>("Gustaf");
  const [join, setJoin] = useState<boolean>(false);
  const [syssnare, setSyssnare] = useState<Syssnare[]>([]);

  useEffect(() => {
    doGetAllSyssnare().then((res) => {
      setSyssnare(res.data);
    });

    if (localStorage.getItem("request_data")) {
      const reqdata = JSON.parse(localStorage.getItem("request_data"));
      doGetRequestByToken(reqdata.token)
        .then((res) => {
          setRequestData(reqdata);
        })
        .catch((er) => {
          console.log(er);
        });
    }
  }, []);

  useEffect(() => {
    doGetAllSyssnare()
      .then((res) => {
        setSyssnare(res.data);
      })
      .catch((er) => console.log(er));
    const myInterval1 = setInterval(async function () {
      doGetAllSyssnare()
        .then((res) => {
          setSyssnare(res.data);
        })
        .catch((er) => console.error(er));
    }, 2000);
    return () => clearInterval(myInterval1);
  }, []);

  const createChatRequest = (syssnare: Syssnare, isVideo: boolean) => {
    doCreateChatRequest(syssnare.id, isVideo).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        console.log(res.token);
        setRequestData({ token: res.token, syssnare: syssnare });
        localStorage.setItem(
          "request_data",
          JSON.stringify({ token: res.token, syssnare: syssnare })
        );
      }
    });
  };

  return (
    <div>
      {!requestData.token &&
        syssnare.map((sys) => {
          return (
            <SyssnareItem
              key={sys.id}
              syssnare={sys}
              onCreateRequest={(sys, vid) => createChatRequest(sys, vid)}
            />
          );
        })}

      {requestData.token && (
        <WaitForRequest
          syssnare={requestData.syssnare}
          token={requestData.token}
        />
      )}
    </div>
  );
}
