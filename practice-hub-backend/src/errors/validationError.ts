import BaseError from "./baseError";

export default class ValidationError extends BaseError {
  constructor(message: string) {
    super(message, "Validation Error", 422);
  }
}
