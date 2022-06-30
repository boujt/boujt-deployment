// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
    message: string;
    token?: string;
};

type ChatRequest = {
    token: string;
    is_video: boolean;
    syssnare: number;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data: ChatRequest = {
        token: req.body.token,
        is_video: req.body.is_video,
        syssnare: req.body.syssnare,
    };
    const payload = {
        data,
    };

    axios
        .post(`${process.env.STRAPI_API_BASE_URL}/api/request-chats`, payload)
        .then((response) => {
            res.status(200).json({
                message: "Request sent",
                token: req.body.token,
            });
        })
        .catch((er) => {
            console.log(er);
            res.status(500).json({ message: "Internal error" });
        });
}
