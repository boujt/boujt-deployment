import axios from "axios";
import Strapi from "strapi-sdk-js";
import { ERRORS } from "../../../../utils/constants";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body.is_video) {
      res.status(400).json({
        success: false,
        error: { message: "Bad request", code: ERRORS.BAD_REQUEST },
      });
    }
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

    if (dailyRes.data.error) {
      return res.status(500).json({
        success: false,
        error: {
          message: "Could not create room",
          code: ERRORS.COULD_NOT_CREATE,
        },
      });
    }

    return res.status(200).json({ success: true, data: dailyRes.data });
  }

  res.status(405).json({
    success: false,
    error: { message: "Method not allowed", code: ERRORS.METHOD_NOT_ALLOWED },
  });
}
