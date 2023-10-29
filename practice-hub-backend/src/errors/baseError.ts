export default class BaseError extends Error {
  public statusCode: number;
  public errorType: string;

  constructor(message: string, errorType: string, statusCode: number) {
    super(message);
    this.name = "BaseError";
    this.statusCode = statusCode;
    this.errorType = errorType;
    // Object.setPrototypeOf(this, new.target.prototype);
  }
}
