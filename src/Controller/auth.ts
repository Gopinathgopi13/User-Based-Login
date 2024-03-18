
import userModel from "@/models/user";
import { RequestHandler } from "express";

export const createUser: RequestHandler = async (req, res)=>{
    console.log(req.body)
    const {name, email, password} = req.body

    const user = await userModel.create({name, email, password});

    res.json({signup: true, user: user});
}