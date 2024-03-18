import { RequestHandler } from "express";

export const userDetailsValidator: RequestHandler = (req, res, next) => {
  // Email Validation
  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
  const { email } = req.body;
  if (!emailRegex.test(email)) {
    return res.status(401).json({ error: "invalid email", data: email });
  }

  // Password Validation
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  const { password } = req.body;
  if (!passwordRegex.test(password)) {
    return res.status(401).json({ error: "invalid password", data: password });
  }
  next();
};
