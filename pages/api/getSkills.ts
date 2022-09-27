// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../client";
import { _Skills } from "../../typings";

const query = groq`
*[_type=="skill"]
`;

type Data = {
  skills: _Skills;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: _Skills = await sanityClient.fetch(query);
  res.status(200).json({ skills });
}
