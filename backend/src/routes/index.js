import { Router } from "express";
import authRouter from "./auth/index.js";
import songRouter from "./song/index.js";
import playlistRouter from "./playlist/index.js";
const allRoutes = Router();
allRoutes.use("/", authRouter);
allRoutes.use("/song", songRouter);
allRoutes.use("/playlist", playlistRouter);
export default allRoutes;
