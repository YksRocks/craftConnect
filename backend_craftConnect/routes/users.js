import { Router } from "express";
import passport from "passport";
import * as userController from "../controllers/user.js";

const router = Router();

// router.post("/register", userController.register);
// router.post("/login", passport.authenticate("local"), userController.login);
router.get("/profile/:id", userController.getProfile);

export default router;
