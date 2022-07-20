// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost } from "../../../utils/types";
const qs = require("qs");
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Get a cookie

    if (req.method !== "GET") {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const query = qs.stringify(
        {
            sort: ["createdAt:desc"],
        },
        {
            encodeValuesOnly: true,
        }
    );

    const { data } = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/bloggs?${query}&populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        }
    );

    const posts: BlogPost[] = data.data.map((post) => {
        return {
            id: post.id,
            published_at: post.attributes.publishedAt,
            title: post.attributes.title,
            text: post.attributes.text,
            views: post.attributes.views,
            cover_image: post.attributes.omslagsbild.data
                ? post.attributes.omslagsbild.data.attributes.url
                : null,
            images: [],
            videos: [],
        };
    });

    res.status(200).json(posts);
}
