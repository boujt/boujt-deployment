// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
var Cookies = require("cookies");
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Get a cookie
  if (true) {
    res.status(200).json({ message: "AUTH OK" });
  }

  res.status(403).json({ message: "AUTH DENIED" });
}
