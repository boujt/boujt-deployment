// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost, Fragelada } from "../../../utils/types";

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
    `${process.env.STRAPI_API_BASE_URL}/api/frageladas?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
      },
    }
  );

  const fragor: Fragelada[] = data.data.map((fraga) => {
    return {
      id: fraga.id,
      published_at: fraga.attributes.publishedAt,
      question: fraga.attributes.question,
      answer: fraga.attributes.answer,
      visible: fraga.attributes.visible,
    };
  });

  res.status(200).json({ data: fragor.filter((fraga) => fraga.visible) });
}
