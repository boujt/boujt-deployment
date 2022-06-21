import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { AboutUsData } from "../../../utils/types";

export default async (_: NextApiRequest, res: NextApiResponse<AboutUsData>) => {
	const { data } = await axios.get(
		`${process.env.STRAPI_API_BASE_URL}/api/om-oss?populate=*`
	);

	res.status(200).json(data.data.attributes);
};
