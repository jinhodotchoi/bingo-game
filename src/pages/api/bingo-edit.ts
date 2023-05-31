// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "fs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const target = "public/json/bingoContents.json";
      fs.writeFileSync(target, req.body);
      res.status(200).json({ message: "good" });
    }
  } catch (e) {
    res.status(500);
  }
}
