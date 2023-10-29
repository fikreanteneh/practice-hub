import { Request, Response, NextFunction } from "express"

export default function CatchAsyncErrors(func: Function) {
    return function(req: Request, res: Response, next: NextFunction) {
      Promise
        .resolve(func(req, res, next))
        .catch(error => {
            console.log(error.code)
            console.log(error.message)
            next(error)
        })
    }
  }