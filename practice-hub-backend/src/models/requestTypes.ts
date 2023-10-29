export type BaseResponseType<T = unknown> = {
  success: boolean;
  response?: T | null;
  error?: string | null;
};
