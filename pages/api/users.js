import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import User from "../../models/User";
import dbConnect from "../../lib/dbConnect";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const { method } = req;

  if (!session)
    return res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }

  // res.send({
  //   error: "You must be signed in to view the protected content on this page.",
  // });
}
