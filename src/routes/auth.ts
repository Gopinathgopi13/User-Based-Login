import { Router } from "express";
import { createUser } from "@/Controller/auth";
const authRouter = Router();

authRouter.post(
  "/signup",
  (req, res, next) => {
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const {email} = req.body;
    if(!emailRegex.test(email)){
        return res.json({
            error: "invalid Email"
        })
    } 

    next();
  },
  createUser
);

export default authRouter;
