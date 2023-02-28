// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import projects from "../../../projects.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { project } = req.query;
  const filterProject = projects.find(({ category }) => project === category);

  res.status(200).json(filterProject);
}
