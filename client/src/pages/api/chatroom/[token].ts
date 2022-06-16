import axios from "axios";
import Strapi from "strapi-sdk-js";
import { ERRORS } from "../../../../utils/constants";
import { ChatRoom } from "../../../../utils/types";
import { ChatRequest } from "../../../components/Adminpanel/ChatRequest";
const qs = require("qs");

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
    } else if (req.method === "DELETE") {
      const rooms = await getRoom(token);
      console.log("innan");
      if (rooms.data.data.length > 0) {
        const room = rooms.data.data[0];

        try {
          await axios.delete(
            `${
              process.env.DAILY_API_URL
            }/rooms/${room.attributes.room_url.replace(
              process.env.DAILY_REST_DOMAIN + "/",
              ""
            )}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
              },
            }
          );
          await axios.delete(
            `${process.env.STRAPI_API_BASE_URL}/api/chatrooms/${room.id}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
              },
            }
          );
        } catch (error) {
          await axios.delete(
            `${process.env.STRAPI_API_BASE_URL}/api/chatrooms/${room.id}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
              },
            }
          );
          res
            .status(200)
            .json({ success: true, message: "Room already deleted" });
        }

        res.status(200).json({ success: true, message: "Deleted room" });
        return;
      } else {
        res.status(404).json({
          success: false,
          error: { message: "Room not found", code: ERRORS.NOT_FOUND },
        });
      }
    } else if (req.method === "GET") {
      const rooms = await getRoom(token);

      if (rooms.data.data.length > 0) {
        res.status(200).json({ success: true, room: rooms.data.data[0] });
      } else {
        res.status(200).json({ success: false, room: null });
      }

      return;
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
      return;
    }
    res.status(500).json({ error: "Unknown" });
    return;
  }

  res.status(405).json({
    success: false,
    error: { message: "Method not allowed", code: ERRORS.METHOD_NOT_ALLOWED },
  });
}

const getRoom = async (token: string) => {
  const query = qs.stringify(
    {
      filters: {
        token: {
          $eq: token,
        },
      },
      populate: {
        syssnare: {
          populate: ["profile_image"],
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  console.log(query);

  return axios.get(
    `${process.env.STRAPI_API_BASE_URL}/api/chatrooms?${query}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );
};
