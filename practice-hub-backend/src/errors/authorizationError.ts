import BaseError from "./baseError";

export default class AuthorizationError extends BaseError {
  constructor() {
    super("You are not authorized to perform this action", "Unauthorized Access",401);
  }
}