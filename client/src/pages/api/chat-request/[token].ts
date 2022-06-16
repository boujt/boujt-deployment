// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ERRORS } from "../../../../utils/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get a cookie

  const { token } = req.query;
  if (req.method !== "GET") {
    res.status(405).json({
      success: false,
      error: { message: "Method not allowed", code: ERRORS.METHOD_NOT_ALLOWED },
    });
    return;
  }

  const requests = await axios.get(
    `${process.env.STRAPI_API_BASE_URL}/api/request-chats?populate=*`,
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
      success: true,
      data: {
        token: token,
        is_video: request_filter[0].attributes.is_video,
        syssnare: request_filter[0].attributes.syssnare.data.id,
      },
    });
    return;
  }

  res.status(404).json({
    success: false,
    error: { message: "Request not found", code: ERRORS.NOT_FOUND },
  });
}
