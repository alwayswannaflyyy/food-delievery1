import { Router } from "express";

// import { code } from "../controllers/otp.controller";
import { getUser } from "../controllers/user.controller";
import { resetpassword } from "../controllers/reset.controller";

const userRouter = Router();

userRouter.get("/getUser", getUser);
// userRouter.post("/code", code);
userRouter.post("/code", resetpassword);
// userRouter.get("/getUser", user).get("/getUserName", getUserName);

export default userRouter;
