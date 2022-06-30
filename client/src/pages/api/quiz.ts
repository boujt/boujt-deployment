import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { QuizData } from "../../../utils/types";

export default async (_: NextApiRequest, res: NextApiResponse<QuizData>) => {
    const { data } = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/quiz?populate=deep`
    );

    // This should runtime-ly convert the response to the type QuizData 
    res.status(200).json(data.data.attributes);
}