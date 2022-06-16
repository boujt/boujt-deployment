import axios from "axios";
import Strapi from "strapi-sdk-js";
import { ERRORS } from "../../../../utils/constants";
import { ChatRoom } from "../../../../utils/types";
import { ChatRequest } from "../../../components/Adminpanel/ChatRequest";

export default async function handler(req, res) {
  const { token } = req.query;
  try {
    if (req.method === "POST") {
      const chatrequest = await axios.get(
        `http://localhost:3000/api/chat-request/${token}`
      );
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
        },
      };

      const body = {
        properties: {
          enable_prejoin_ui: false,
          enable_knocking: false,
          enable_network_ui: true,
          enable_screenshare: false,
          enable_chat: true,
          lang: "sv",
          geo: "eu-central-1",
          exp: Math.round(Date.now() / 1000) + 1000,
          eject_at_room_exp: true,
          start_video_off: true,
          start_audio_off: true,
          max_participants: 2,
        },
      };

      const dailyRes = await axios.post(
        `https://api.daily.co/v1/rooms`,
        body,
        options
      );

      const chatroomData: ChatRoom = {
        token: chatrequest.data.data.token,
        is_video: chatrequest.data.data.is_video,
        syssnare: chatrequest.data.data.syssnare,
        room_url: dailyRes.data.url,
      };

      await axios.post(
        `${process.env.STRAPI_API_BASE_URL}/api/chatrooms`,
        { data: { ...chatroomData } },
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
          },
        }
      );
      res.status(201).json({ success: true, data: { chatroomData } });
      return;
    }
  } catch (error) {
    console.log(error.response.data);
    res.status(error.response.status).json(error.response.data);
    return;
  }

  res.status(405).json({
    success: false,
    error: { message: "Method not allowed", code: ERRORS.METHOD_NOT_ALLOWED },
  });
}
