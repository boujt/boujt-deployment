import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { SyssnareTipsarData } from "../../../utils/types";

export default async (_: NextApiRequest, res: NextApiResponse<SyssnareTipsarData[]>) => {
	const { data } = await axios.get(
		`${process.env.STRAPI_API_BASE_URL}/api/syssnare-tipsars`
	);

	const filtered = data.data.map((m: any) => {
		return m.attributes
	});

	res.status(200).json(filtered);
};
