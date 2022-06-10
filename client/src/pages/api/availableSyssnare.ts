import axios from "axios";
import Strapi from "strapi-sdk-js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const in_call = await axios.get(
      `${process.env.STRAPI_API_BASE_URL}api/videochats?populate=*`
    );

    const in_chat = await axios.get(
      `${process.env.STRAPI_API_BASE_URL}api/textchats?populate=*`
    );

    const all_syssnare = await axios.get(
      `${process.env.STRAPI_API_BASE_URL}api/users`
    );

    const busy_video: number[] = in_call.data.data.map((el) => {
      return el.attributes.user.data.id;
    });
    const busy_text: number[] = in_chat.data.data.map((el) => {
      return el.attributes.user.data.id;
    });

    const busy: Set<number> = new Set(busy_video.concat(busy_text));

    const result = all_syssnare.data
      .filter((el) => {
        return !busy.has(el.id);
      })
      .map((el) => {
        return {
          id: el.id,
          name: el.username,
        };
      });

    res.status(200).json({ available: result });
  }

  return res.status(401);
}
