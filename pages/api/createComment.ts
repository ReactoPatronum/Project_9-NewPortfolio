// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../client";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { subject, email, message } = JSON.parse(req.body);
  try {
    await sanityClient.create({
      _type: "messages",
      message,
      email,
      subject,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ name: "John Doe" });
}
