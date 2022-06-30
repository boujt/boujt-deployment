import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { AboutUsData, Faq, Worker } from "../../../utils/types";

export default async (_: NextApiRequest, res: NextApiResponse<AboutUsData>) => {
	const { data } = await axios.get(
		`${process.env.STRAPI_API_BASE_URL}/api/om-oss?populate=deep`
	);

	const workers = data.data.attributes.workers.map((obj: any) => {
		return {
			name: obj.name,
			email: obj.email,
			role: obj.role,
			image: obj.image.data.attributes.url
		}
	}) as Worker[];

	const result = {
		workers,
		faq: data.data.attributes.faq as Faq[]
	};

	res.status(200).json(result);
};
