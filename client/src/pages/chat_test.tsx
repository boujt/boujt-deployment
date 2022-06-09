import { useCallback, useEffect, useState } from "react";
import { useAppMessage, useDaily, useRoom } from "@daily-co/daily-react-hooks";
import axios from "axios";

const AppMessageDemo = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState<string>("");
  const [inputValue, setInputValue] = useState("");
  const [joined, setJoined] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const currentRoom = useRoom();
  const callObject = useDaily();

  const sendMessage = () => {
    if (!callObject) return;

    callObject.sendAppMessage({ message: inputValue }, "*");
    const name = callObject.participants().local.user_name
      ? callObject.participants().local.user_name
      : "Guest";
    setChatHistory([
      ...chatHistory,
      {
        sender: name,
        message: inputValue,
      },
    ]);
    setInputValue("");
    setInputValue("");
  };

  const joinRoom = () => {
    callObject
      ?.join({ url: input })
      .then((res) => {
        setJoined(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const login = () => {
    axios
      .post("https://shark-app-md2sm.ondigitalocean.app/api/auth/local", {
        identifier: "jakob.karlstrand@weknowit.nu",
        password: "Karlet66",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleAppMessage(event) {
      const participants = callObject.participants();
      const name = participants[event.fromId].user_name
        ? participants[event.fromId].user_name
        : "Guest";
      console.log(event);
      if (!event.data.message) return;
      setChatHistory([
        ...chatHistory,
        {
          sender: name,
          message: event.data.message,
        },
      ]);
      // Make other icons light up
    }

    callObject.on("app-message", handleAppMessage);

    return function cleanup() {
      callObject.off("app-message", handleAppMessage);
    };
  }, [callObject, chatHistory]);

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => joinRoom()}>Join chat</button>
      <button onClick={() => login()}>Login</button>
      {joined && (
        <>
          <ul>
            {chatHistory.map((ev, id) => (
              <li key={id}>
                {ev.sender}: {JSON.stringify(ev.message)}
              </li>
            ))}
          </ul>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => sendMessage()}>Send</button>
        </>
      )}
    </>
  );
};

export default AppMessageDemo;
