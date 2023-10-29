import { NextFunction, Request, Response } from "express";
import ResponseHandler from "./ResponseHandler";

export default function HandleErrorsAndResponses(func: Function) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(func(req, res, next))
      .then((result) => ResponseHandler(result, req, res))
      .catch((error) => {
        console.log("------------------------------------");  
        console.log(error);
        next(error);
      });
  };
}
