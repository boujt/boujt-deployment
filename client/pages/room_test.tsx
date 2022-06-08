import React, { useState } from "react";
import axios from "axios";
import { RoomResponse } from "../utils/types";
import { useRoom } from "@daily-co/daily-react-hooks";
export default function RoomTest() {
  const [room, setRoom] = useState<RoomResponse | null>(null);

  const createRoom = () => {
    axios.post("/api/video_room/create").then((re) => {
      setRoom(re.data);
    });
  };
  console.log(room);
  return (
    <div>
      <button onClick={() => createRoom()}>SKAPA RUM</button>

      {room !== null && (
        <a href={room.url}>
          <button>Gå till mötet</button>
        </a>
      )}
    </div>
  );
}
