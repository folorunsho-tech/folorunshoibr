// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import projects from "../../projects.json";
type Data = {
  category: string;
  projects: {
    name: string;
    img: {
      main: string;
    };
    link: string;
    code_link: string;
    tags: string[];
  }[];
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(projects);
}
