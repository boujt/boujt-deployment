// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost, Fragelada } from "../../../utils/types";
const qs = require("qs");
const sgMail = require("@sendgrid/mail");

var fs = require("fs");

const html_template: string = require("fs").readFileSync(
    "public/fragelada_template.html",
    "utf8"
);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const query = qs.stringify(
        {
            sort: ["publishedAt:desc"],
        },
        {
            encodeValuesOnly: true,
        }
    );
    if (req.method === "GET") {
        const { data } = await axios.get(
            `${process.env.STRAPI_API_BASE_URL}/api/frageladas?${query}&populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
                },
            }
        );

        const fragor: Fragelada[] = data.data.map((fraga) => {
            const cats = fraga.attributes.kategorier.data.map(
                (cat) => cat.attributes.kategori
            );
            return {
                id: fraga.id,
                published_at: fraga.attributes.publishedAt,
                question: fraga.attributes.question,
                answer: fraga.attributes.answer,
                visible: fraga.attributes.visible,
                categories: cats.length === 0 ? ["Övrigt"] : cats,
            };
        });

        res.status(200).json(fragor.filter((fraga) => fraga.visible));
        return;
    }
    if (req.method === "POST") {
        const question: string = req.body.question;

        if (!question || question.trim() === "") {
            res.status(400).json({ message: "Bad request" });
            return;
        }

        await axios
            .post(
                `${process.env.STRAPI_API_BASE_URL}/api/frageladas`,
                {
                    data: {
                        question: question,
                        visible: false,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
                    },
                }
            )
            .then(async (response) => {
                const formatted_html = html_template.replace(
                    "%QUESTION%",
                    req.body.question
                );
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);

                const msg = {
                    to: "jakob.karlstrand@weknowit.nu", // Change to your recipient
                    from: "boujt.videos@gmail.com", // Change to your verified sender
                    subject: "Ny fråga i frågelådan",
                    html: formatted_html,
                };
                await sgMail.send(msg);
            })
            .catch((err) => {
                console.log(err.data.error);
                res.status(500).json({ error: err });
            });
        res.status(200).json({ message: "Question created" });
        return;
    } else {
        res.status(405).json({ message: "Method not allowed" });
        return;
    }
}
