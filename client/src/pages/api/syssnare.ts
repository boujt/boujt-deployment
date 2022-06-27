// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
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

    const request_chats_data = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/request-chats?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        }
    );

    const syssnare_data = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/users?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        }
    );

    const filtered_data = syssnare_data.data.map((el) => {
        const img = el.profile_image
            ? process.env.STRAPI_API_BASE_URL + el.profile_image.url
            : null;

        const in_queue = request_chats_data.data.data.filter((cr) => {
            return cr.attributes.syssnare.data.id === el.id;
        }).length;

        return {
            id: el.id,
            name: el.name,
            status: el.status,
            favorite_animal: el.favorite_animal,
            favorite_icecream: el.favorite_icecream,
            img: img,
            people_in_queue: in_queue,
        };
    });

    res.status(200).json(filtered_data);
}
