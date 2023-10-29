
import AuthorizationError from "../errors/authorizationError";
import Auth from "../models/Auth";

const authorizationMiddleware = async (user: Auth | null, role: string[] = [], id: string = "") => {  
  if (!role) return;
  if (!user) throw new AuthorizationError();
  if ( !(role.includes(user?.user_metadata.role)) ) throw new AuthorizationError();
  if (id === "") return;
  if (user?.sub !== id && user?.user_metadata.role !== "admin") throw new AuthorizationError();
}

export default authorizationMiddleware;