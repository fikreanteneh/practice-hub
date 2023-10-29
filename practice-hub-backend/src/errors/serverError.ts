import BaseError from "./baseError";

export default class ServerError extends BaseError {
  constructor() {
    super("Something Went Wrong", "Internal Server Error",500);
  }
}
