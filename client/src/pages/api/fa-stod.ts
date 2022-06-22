import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ExternalLink, FaStodData } from "../../../utils/types";


export default async (req: NextApiRequest, res: NextApiResponse<FaStodData>) => {
    // Get external links
    const {data} = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/externa-laenkars?populate=*`
    );

    // Convert
    const processed = (data.data as Array<any>).map(obj => obj.attributes) as Array<ExternalLink>;

    res.status(200).json({
        externalLinks: processed
    });
}