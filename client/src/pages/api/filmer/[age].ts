import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { MovieData } from "../../../../utils/types";

export default async (req: NextApiRequest, res: NextApiResponse<MovieData[]>) => {
    // We either want 7-14 data or 15-21 data, the split happends here
    const { age } = req.query;
    console.log(age);
    const endpoint = age == '7' ? 'sju-till-fjortons' : 'femton-till-tjugoetts';

    const { data } = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/${endpoint}?populate=*`
    );      
    
    // Convert from the array response to a more workable MovieData[] type
    // This totally assumes that the strapi.io collection type matches MovieData type 100%
    // if not matching there will be weird behaviours
    const processed = (data.data as Array<any>).map(obj => obj.attributes);
    
    res.status(200).json(processed);
}
