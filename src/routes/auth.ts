import { Router } from "express";
import { createUser } from "@/Controller/auth";
import { userDetailsValidator } from "@/Middlewares/Validator";
const authRouter = Router();

authRouter.post(
  "/signup",
  userDetailsValidator,
  createUser
);

export default authRouter;
