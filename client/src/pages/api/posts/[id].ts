import axios from "axios";
import { BlogPost } from "../../../../utils/types";

/*
 *** Deletes specifik room, if exists
 */
export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method !== "GET") {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const { data } = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/bloggs/${id}?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        }
    );

    const post: BlogPost = {
        id: data.data.id,
        published_at: data.data.attributes.publishedAt,
        title: data.data.attributes.title,
        text: data.data.attributes.text,
        views: data.data.attributes.views,
        cover_image: data.data.attributes.omslagsbild.data
            ? data.data.attributes.omslagsbild.data.attributes.url
            : null,
        images: [],
        videos: [],
    };

    res.status(200).json(post);
}
