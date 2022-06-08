// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Strapi from "strapi-sdk-js";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const strapi = new Strapi({
    url: "https://shark-app-md2sm.ondigitalocean.app/",
    prefix: "/api",
    store: {
      key: "strapi_jwt",
      useLocalStorage: false,
      cookieOptions: { path: "/" },
    },
    axiosOptions: {},
  });
  console.log(strapi.getToken());
  const user = await strapi.fetchUser();
  console.log(user);
  if (user) {
    res.status(200).json({ message: "AUTH OK" });
  }

  res.status(403).json({ message: "AUTH DENIED" });
}
