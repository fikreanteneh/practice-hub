import { Request, Response } from "express";

const ResponseHandler = (response: any, req: Request, res: Response) => {
  switch (req.method) {
    case "POST":
      return res.status(201).json({
        success: true,
        message: response,
        error : null,
        statusCode: 201,
      });
      case "PUT":
      return res.status(200).json({
        success: true,
        message: response,
        error : null,
        statusCode: 200,
      });
    case "GET":
      return res.status(200).json({
        success: true,
        message: response,
        error : null,
        statusCode: 200,
      });
      case "DELETE":
        return res.status(204).json({
          success: true,
          message: response,
          error : null,
        statusCode: 204,
      });
  }
};
export default ResponseHandler;


// export default class ResponseHandler {
//   static PostMethod(response: any, req: Request, res: Response) {
//     return res.status(201).json({
//       success: true,
//       response: response,
//       statusCode: 201,
//     });
//   }

//   static PutMethod(response: any, req: Request, res: Response) {
//     return res.status(200).json({
//       success: true,
//       response: response,
//       statusCode: 200,
//     });
//   }

//   static DeleteMethod(response: any, req: Request, res: Response) {
//     return res.status(204).json({
//       success: true,
//       response: response,
//       statusCode: 204,
//     });
//   }

//   static GetMethod(response: any, req: Request, res: Response) {
//     return res.status(200).json({
//       success: true,
//       response: response,
//       statusCode: 200,
//     });
//   }
// }
