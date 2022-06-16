// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get a cookie

  const { token } = req.query;
  if (req.method !== "GET") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  const video_res = await axios.get(
    `${process.env.STRAPI_API_BASE_URL}/api/videochats/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );

  const text_res = await axios.get(
    `${process.env.STRAPI_API_BASE_URL}/api/textchats/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );

  const text = text_res.data.data;
  const video = video_res.data.data;

  const text_filter = text.filter((t) => t.attributes.session_id === token);
  const video_filter = video.filter((v) => v.attributes.session_id === token);
  if (text_filter.length > 0) {
    res.status(200).json({
      data: {
        url:
          process.env.DAILY_REST_DOMAIN +
          "/" +
          text_filter[0].attributes.room_url,
      },
    });
    return;
  }
  if (video_filter.length > 0) {
    res.status(200).json({
      data: {
        url:
          process.env.DAILY_REST_DOMAIN +
          "/" +
          video_filter[0].attributes.room_url,
      },
    });
    return;
  }

  res.status(404).json({ message: "Room not found" });
}
