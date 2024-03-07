// import express from "express";

// import cors from "cors";
// import { json } from "body-parser";
// import authRouter from "./routers/auth.router";
// import foodRouter from "./routers/food.router";
// import { authMiddleware } from "./middlewares";
// import emailRouter from "./routers/email.router";
// import "./controllers/otp.controller";
// const app = express();

// app.use(cors());
// app.use(json());

// app.use("/", authRouter);

// // app.use(authMiddleware);
// app.use("/password", emailRouter)

// app.use("/foods", foodRouter);

// export default app;

import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import emailRouter from "./routers/email.router";
import { sendEmail } from "./controllers/email.controller";
import userRouter from "./routers/user.router";
import foodRouter from "./routers/food.router";
import { connect } from "./database";

const app = express();

connect();

app.use(cors());
app.use(json());
app.use("/", authRouter);
app.use("/foods", foodRouter);
app.use("/", userRouter);
app.use("/", emailRouter);

export default app;
