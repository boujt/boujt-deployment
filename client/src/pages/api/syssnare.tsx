// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get a cookie

  if (req.method !== "GET") {
    res.status(400).json({ message: "Bad request" });
    return;
  }

  const { data } = await axios.get(
    `${process.env.STRAPI_API_BASE_URL}api/users/`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );

  const filtered_data = data.map((el) => {
    return {
      id: el.id,
      name: el.name,
      status: el.status,
      favorite_animal: el.favorite_animal,
      favorite_icecream: el.favorite_icecream,
    };
  });

  res.status(200).json(filtered_data);
}
