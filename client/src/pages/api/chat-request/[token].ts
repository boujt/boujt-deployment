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

  let requests = await axios.get(
    `${process.env.STRAPI_API_BASE_URL}/api/request-chats/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );

  const request_filter = requests.data.data.filter(
    (t) => t.attributes.token === token
  );

  if (request_filter.length > 0) {
    res.status(200).json({
      data: {
        token: token,
      },
    });
    return;
  }

  res.status(404).json({ message: "Request not found" });
}
