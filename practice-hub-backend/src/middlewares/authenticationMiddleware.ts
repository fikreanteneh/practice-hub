import supabase from "../config/supabase";
import { Request, Response, NextFunction } from "express";
import jwt, { decode } from "jsonwebtoken";
import Auth from "../models/Auth";

export default async  function authenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token: string | string[] = req.headers.authorization ?? "";
  token = token.toString();

  if (!token) req.body.user = null;
    
  else {
    const tokenValue = token.split(" ")[1];
    if (!tokenValue) req.body.user = null;
    else {
      let decodedToken = null;
      try {
        decodedToken = jwt.verify(
          tokenValue,
          process.env.SUPABASE_JWT ?? ""
        ); 
      } catch {
        decodedToken = null;
      }
      if (!decodedToken) req.body.user = null;
      else {
        decodedToken = decodedToken as Auth;
        req.body.user = decodedToken;
      }
    }
  }
  next();
}
