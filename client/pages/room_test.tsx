import React, { useState } from "react";
import { RoomResponse } from "../utils/types";
import axios from "axios";
export default function RoomTest() {
  const [room, setRoom] = useState<RoomResponse | null>(null);

  const createRoom = () => {
<<<<<<< HEAD
    axios.post("/api/video_room/create").then((re) => {
=======
    axios.post("/api/room/create").then((re: any) => {
>>>>>>> 2c0b310719538fca1d1e8bab5a17abe56527dbbf
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
