// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { loginServiceAccount } from "../../../utils/service";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get a cookie
  const jwt_token = await loginServiceAccount();
  const { data } = await axios.get(
    `${process.env.STRAPI_API_BASE_URL}api/bloggs`,
    {
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    }
  );

  console.log(data);

  res.status(200).json({ message: "AUTH OK", data: data });
}
