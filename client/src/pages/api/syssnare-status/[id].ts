// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get a cookie

  if (req.method !== "POST") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  const { id } = req.query;

  if (!req.body.status) {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  console.log(req.body.status);
  const { data } = await axios.put(
    `${process.env.STRAPI_API_BASE_URL}api/users/${id}`,
    {
      status: req.body.status,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );

  res.status(200).json(data);
}
