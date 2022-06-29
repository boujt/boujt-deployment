// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { ERRORS, MAX_PEOPLE_IN_QUEUE } from "../../../../utils/constants";
import { doGetAllSyssnare } from "../../../../utils/service";
type Data = {
    message: string;
    token?: string;
};

type ChatRequest = {
    token: string;
    is_video: boolean;
    syssnare: number;
};
type RequestError = {
    success: boolean;
    error: {
        code: string;
        message: string;
    };
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | RequestError>
) {
    const data: ChatRequest = {
        token: req.body.token,
        is_video: req.body.is_video,
        syssnare: req.body.syssnare,
    };
    const payload = {
        data,
    };

    const requests = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/request-chats?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        }
    );

    const people_in_queue = requests.data.data.filter((re) => {
        return data.syssnare === re.attributes.syssnare.data.id;
    }).length;

    if (people_in_queue >= MAX_PEOPLE_IN_QUEUE) {
        res.status(400).json({
            success: false,
            error: {
                code: ERRORS.QUEUE_IS_FULL,
                message: "Kön är full",
            },
        });
        return;
    }

    await axios
        .post(`${process.env.STRAPI_API_BASE_URL}/api/request-chats`, payload, {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        })
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
