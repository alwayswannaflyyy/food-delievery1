// import { RequestHandler } from "express";
// import jwt, { JwtPayload } from "jsonwebtoken";
// import { UserModel } from "../models";

// export const user: RequestHandler = async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Couldn't get authorization",
//     });
//   }

//   try {
//     const verify = jwt.verify(authorization, "secret-key");
//     const { id } = verify as JwtPayload;

//     const profile = await UserModel.find({ _id: id });

//     res.json({
//       profile,
//     });
//   } catch (error) {
//     return res.status(409).json({ message: "Profile unauthorization" });
//   }
// };
import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { UserModel } from "../models";

export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "Couldn't get authorization",
    });
  }

  try {
    const verify = jwt.verify(authorization, "secret-key");
    const { id } = verify as JwtPayload;

    const profile = await UserModel.findOne({ _id: id });

    res.json(profile);
  } catch (error) {
    return res.status(401).json({ message: "Profile unauthorization" });
  }
};
// export const getUserName: RequestHandler = async (req, res) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({
//       message: "Unauthorized",
//     });
//   }
//   try {
//     const { id: userId } = jwt.verify(
//       authorization,
//       "secret-key"
//     ) as JwtPayload;

//     const user = await UserModel.findOne({ _id: userId });

//     if (!user) {
//       return res.status(401).json({
//         message: "User not fount",
//       });
//     }

//     res.json({
//       userName: user.name,
//     });
//   } catch (error) {}
// };
