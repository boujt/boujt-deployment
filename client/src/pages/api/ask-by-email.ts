// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../../utils/sendEmail";
import {
    EmailData,
    EmailFormData
} from "../../../utils/types";
const qs = require("qs");
const sgMail = require("@sendgrid/mail");

var fs = require("fs");

import html_template from './kontakt_template';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== "POST") {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    if (!req.body.emailData) {
        res.status(400).json({ message: "Missing props" });
        return;
    }

    const emailData: EmailFormData = req.body.emailData;

    let formatted_html = html_template.replace("%NAME%", emailData.name);
    formatted_html = formatted_html.replace("%EMAIL%", emailData.email);
    formatted_html = formatted_html.replace("%QUESTION%", emailData.message);
    const email: EmailData = {
        to: "jakob.karlstrand@weknowit.nu",
        subject: "Ny fråga från kontaktformuläret",
        html: formatted_html,
    };

    if (emailData.attachment) {
        email.attachment = emailData.attachment;
    }

    await sendEmail(email)
        .then((res) => {
            console.log(res);
        })
        .catch((er) => {
            console.log(er.response);
        });

    res.status(200).json({ m: "ok" });
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "30mb", // Set desired value here
        },
    },
};
