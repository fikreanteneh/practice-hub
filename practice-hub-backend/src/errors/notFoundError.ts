import BaseError from "./baseError";

export default class NotFoundError extends BaseError {
  constructor(id: string) {
    super(`Resource with id ${id} not found`,  "Resource Not Found" ,404);
  }
}

