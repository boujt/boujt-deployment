import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaComment, FaVideo } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { generateToken } from "../../utils/helperFunctions";
import {
  doCancelChatRequest,
  doCreateChatRequest,
  doGetAllSyssnare,
  doGetChatRoomFromToken,
  doGetRequestByToken,
} from "../../utils/service";
import { Syssnare } from "../../utils/types";
import AvailableSyssnare from "../components/AvailableSyssnare";
import BoujtTemplate from "../components/BoujtTemplate";
import { LiveChat } from "../components/LiveChat";
import { SyssnareItem } from "../components/SyssnareItem";
import { WaitForRequest } from "../components/WaitForRequest";

export default function Chat() {
  const [url, setURL] = useState<string>("");
  const [requestData, setRequestData] = useState<{
    token: string | null;
    syssnare: Syssnare | null;
  }>({ token: null, syssnare: null });

  const [syssnare, setSyssnare] = useState<Syssnare[]>([]);

  // useEffect(() => {
  //   doGetAllSyssnare().then((res) => {
  //     setSyssnare(res.data);
  //   });

  //   if (localStorage.getItem("request_data")) {
  //     const reqdata = JSON.parse(localStorage.getItem("request_data"));
  //     doGetRequestByToken(reqdata.token)
  //       .then((res) => {
  //         setRequestData(reqdata);
  //       })
  //       .catch((er) => {
  //         console.log(er);
  //       });
  //   }
  // }, []);

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
    }, 5000);
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

  const cancelRequest = (token: string) => {
    doCancelChatRequest(token)
      .then((res) => {
        setRequestData({ token: null, syssnare: null });
      })
      .catch((er) => {
        setRequestData({ token: null, syssnare: null });
      });
  };

  return (
    <BoujtTemplate gap={50}>
      <Heading>Chatten</Heading>
      <Text>
        Här kan du skicka en förfrågan till en ledig syssnare. Antingen via text
        eller video. När syssnaren har accepterat din förfrågan skickas du till
        ett chatrum
      </Text>

      <Text fontSize={30} fontWeight={400}>
        Lediga syssnare
      </Text>
      <AvailableSyssnare
        syssnare={syssnare}
        onMakeRequest={(syssnare: Syssnare, isVideo: boolean) =>
          createChatRequest(syssnare, isVideo)
        }
      />

      <Modal
        isOpen={requestData.token !== null}
        onClose={() => cancelRequest(requestData.token)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Förfrågan skickat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <WaitForRequest
              syssnare={requestData.syssnare}
              token={requestData.token}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="red"
              color="white"
              mr={3}
              onClick={() => cancelRequest(requestData.token)}
            >
              Avbryt förfrågan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </BoujtTemplate>
  );
}
