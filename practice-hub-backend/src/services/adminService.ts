import supabase from "../config/supabase";
import { ServerError } from "../errors";
import authorizationMiddleware from "../middlewares/authorizationMiddleware";
import { Admin } from "../models";
import Auth from "../models/Auth";
import { pharamacyMedicineCreateValidation } from "../validations";

export default class AdminService {
  static async updateAdmin(body: any, user: Auth | null): Promise<Admin> {
    body = pharamacyMedicineCreateValidation(body);
    await authorizationMiddleware(user, ["admin"]);
    const { data, error } = await supabase
      .from("pharmacy")
      .update({
        name: body.name,
      })
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Admin;
  }

  static async addAdmin(body: any): Promise<Admin> {
    const { data, error } = await supabase
      .from("admin")
      .insert({
        id: body.id,
        name: body.name,
      })
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Admin;
  }
}
