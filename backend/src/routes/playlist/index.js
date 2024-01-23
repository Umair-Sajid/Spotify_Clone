import { Router } from "express";
import playlistController from "../../controller/playlist/index.js";
import authenticateMiddleware from "../../middleware/authenticate.js";
const playlistRouter=Router();
playlistRouter.post("/create",authenticateMiddleware,playlistController.create);
playlistRouter.get("/:playlistId",authenticateMiddleware,playlistController.playlistId)
playlistRouter.get("/artist/:artistId",authenticateMiddleware,playlistController.artistId)
export default playlistRouter;