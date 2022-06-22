// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../../utils/sendEmail";
import {
    BlogPost,
    Fragelada,
    EmailData,
    EmailFormData,
} from "../../../utils/types";
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
    console.log(req.body);
    if (req.method !== "POST") {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    if (!req.body.emailData) {
        res.status(400).json({ message: "Missing props" });
        return;
    }

    const emailData: EmailFormData = req.body.emaildata;

    console.log(emailData);
    res.status(200).json({ m: "ok" });
}
