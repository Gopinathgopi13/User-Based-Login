import { RequestHandler } from "express";

export const createUser: RequestHandler = (req, res)=>{
    console.log(req.body)
    res.json({signup: true});
}