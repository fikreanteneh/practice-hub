import supabase from "../config/supabase";
import { NotFoundError, ServerError } from "../errors";
import authorizationMiddleware from "../middlewares/authorizationMiddleware";
import { PharmacyMedicine } from "../models";
import Auth from "../models/Auth";
import { pharamacyMedicineCreateValidation } from "../validations";

export default class PharmacyMedicineService {
  static async getPharmacyMedicine(body: string): Promise<PharmacyMedicine> {
    const { data, error } = await supabase
      .from("pharmacymedicine")
      .select("*")
      .eq("id", body)
      .single();
    if (error) throw new NotFoundError(body);
    return data as PharmacyMedicine;
  }

  static async addPharmacyMedicine(
    body: any,
    user: Auth | null
  ): Promise<PharmacyMedicine> {
    body = pharamacyMedicineCreateValidation(body);
    await authorizationMiddleware(user, ["admin", "pharmacy"], body.pharmacyid);
    const { data, error } = await supabase
      .from("pharmacymedicine")
      .upsert({
        medicineid: body.medicineid,
        pharmacyid: body.pharmacyid,
        quantity: body.quantity,
        price: body.price,
      })
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as PharmacyMedicine;
  }

  static async updatePharmacyMedicine(
    body: any,
    user: Auth | null
  ): Promise<PharmacyMedicine> {
    body = pharamacyMedicineCreateValidation(body);
    const pharmacymedicine = await this.getPharmacyMedicine(body.id);
    await authorizationMiddleware(
      user,
      ["admin", "pharmacy"],
      pharmacymedicine.pharmacyid
    );
    const { data, error } = await supabase
      .from("pharmacymedicine")
      .update({
        medicineid: body.medicineid,
        pharmacyid: body.pharmacyid,
        quantity: body.quantity,
        price: body.price,
      })
      .eq("id", body.id)
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as PharmacyMedicine;
  }

  // static async changeQuantity(body: any): Promise<any> {
  // const { data, error } = await supabase
  //   .from("medicine")
  //   .update({
  //     quantity: ,
  //   })
  //   .match({ id: body.id });
  // if (error) return error;
  // return data;
  //  }

  static async deletePharmacyMedicine(
    body: string,
    user: Auth | null
  ): Promise<PharmacyMedicine> {
    const pharmacymedicine = await this.getPharmacyMedicine(body);
    await authorizationMiddleware(
      user,
      ["admin", "pharmacy"],
      pharmacymedicine.pharmacyid
    );
    const { data, error } = await supabase
      .from("pharamcyedicine")
      .delete()
      .eq("id", body)
      .select("*")
      .single();

    if (error) throw new ServerError();
    return data as PharmacyMedicine;
  }
}
