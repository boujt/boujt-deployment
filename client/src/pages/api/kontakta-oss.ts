import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ContactUsData } from "../../../utils/types";

export default async (_: NextApiRequest, res: NextApiResponse<ContactUsData>) => {
    // Make request to strapi
    const { data } = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/kontakta-oss`,
    );

    res.status(200).json(data.data.attributes);
}