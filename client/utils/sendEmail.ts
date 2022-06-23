import { EmailData } from "./types";

const sgMail = require("@sendgrid/mail");

export const sendEmail = async (emailData: EmailData) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: emailData.to, // Change to your recipient
        from: "boujt.videos@gmail.com", // Change to your verified sender
        subject: emailData.subject,
        html: emailData.html,
    };

    if (emailData.attachment) {
        msg.attachments = [
            {
                content: emailData.attachment.base64,
                type: emailData.attachment.type,
                filename: emailData.attachment?.filename,
                disposition: "attachment",
            },
        ];
    }
    return await sgMail.send(msg);
};

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "30mb", // Set desired value here
        },
    },
};
