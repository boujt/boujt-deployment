// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost, Fragelada } from "../../../utils/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { data } = await axios.get(
      `${process.env.STRAPI_API_BASE_URL}/api/frageladas?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
        },
      }
    );

    const fragor: Fragelada[] = data.data.map((fraga) => {
      const cats = fraga.attributes.kategorier.data.map(
        (cat) => cat.attributes.kategori
      );
      return {
        id: fraga.id,
        published_at: fraga.attributes.publishedAt,
        question: fraga.attributes.question,
        answer: fraga.attributes.answer,
        visible: fraga.attributes.visible,
        categories: cats.length === 0 ? ["Övrigt"] : cats,
      };
    });

    res.status(200).json({ data: fragor.filter((fraga) => fraga.visible) });
    return;
  }
  if (req.method === "POST") {
    const question: string = req.body.question;

    if (!question || question.trim() === "") {
      res.status(400).json({ message: "Bad request" });
      return;
    }

    await axios
      .post(
        `${process.env.STRAPI_API_BASE_URL}/api/frageladas`,
        {
          data: {
            question: question,
            visible: false,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
          },
        }
      )
      .then((response) => {
        res.status(201).json({ message: "Question created" });
      })
      .catch((err) => {
        console.log(err.data.error);
        res.status(500).json({ error: err });
      });
    return;
  } else {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }
}
