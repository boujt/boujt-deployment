import axios from "axios";
export default async function handler(req, res) {
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
          enable_prejoin_ui: true,
          enable_knocking: true,
          enable_network_ui: true,
          enable_screenshare: true,
          enable_chat: true,
          lang: "sv",
          geo: "eu-central-1",
          exp: Math.round(Date.now() / 1000) + 300,
          eject_at_room_exp: true,
        },
      }),
    };

    console.log(options);

    const dailyRes = await fetch(`https://api.daily.co/v1/rooms`, options);

    const response = await dailyRes.json();

    if (response.error) {
      return res.status(500).json(response.error);
    }

    return res.status(200).json(response);
  }

  return res.status(401);
}
