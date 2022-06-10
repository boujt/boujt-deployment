import axios from "axios";
import Strapi from "strapi-sdk-js";

export default async function handler(req, res) {
  const strapi = new Strapi({
    url: "https://shark-app-md2sm.ondigitalocean.app/",
    prefix: "/api",
    store: {
      key: "strapi_jwt",
      useLocalStorage: false,
      cookieOptions: { path: "/" },
    },
    axiosOptions: {},
  });

  if (req.method === "POST") {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DAILY_API_KEY}`,
      },
      body: JSON.stringify({
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
      }),
    };

    const dailyRes = await fetch(`https://api.daily.co/v1/rooms`, options);

    const response = await dailyRes.json();

    if (response.error) {
      return res.status(500).json(response.error);
    }

    return res.status(200).json(response);
  }

  return res.status(401);
}
