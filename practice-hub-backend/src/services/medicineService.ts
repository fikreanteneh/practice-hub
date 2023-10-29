import supabase from "../config/supabase";
import authorizationMiddleware from "../middlewares/authorizationMiddleware";
import Auth from "../models/Auth";
import {
  medicineCreateValidation,
  medicineUpdateValidation,
} from "../validations";
import { NotFoundError, ServerError } from "../errors";
import { Medicine } from "../models/Medicine";

export default class MedicineService {
  static async getMedicine(body: string): Promise<Medicine> { 
    const { data, error } = await supabase
      .from("medicine")
      .select("*")
      .eq("id", body)
      .single();
    if (error) throw new NotFoundError(body);
    return data as Medicine;
  }

  static async addMedicine(body: any, user: Auth | null): Promise<Medicine> {
    await authorizationMiddleware(user, ["admin", "pharmacy"]);
    body = medicineCreateValidation(body);
    const { data, error } = await supabase
      .from("medicine")
      .insert(
        {
          name: body.name,
          exactname: body.exactname,
          amount: body.amount,
        },
      )
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Medicine;
  }

  static async updateMedicine(body: any, user: Auth | null): Promise<Medicine> {
    await authorizationMiddleware(user, ["admin"]);
    body = medicineUpdateValidation(body);
    await this.getMedicine(body.id);
    const { data, error } = await supabase
      .from("medicine")
      .update([
        {
          name: body.name,
          exactname: body.exactname,
          amount: body.amount,
        },
      ])
      .eq("id", body.id)
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Medicine;
  }

  static async deleteMedicine(body: string, user: Auth | null): Promise<Medicine> {
    await authorizationMiddleware(user, ["admin"]);
    await this.getMedicine(body);
    const { data, error } = await supabase
      .from("medicine")
      .delete()
      .eq("id", body)
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Medicine;
  }
}
