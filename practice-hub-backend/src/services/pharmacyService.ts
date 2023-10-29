import supabase from "../config/supabase";
import { ServerError } from "../errors";
import authorizationMiddleware from "../middlewares/authorizationMiddleware";
import { Pharmacy } from "../models";
import { pharamacyMedicineCreateValidation } from "../validations";

export default class PharmacyService {
  static async updatePhamacy(body: any): Promise<Pharmacy> {
    body = pharamacyMedicineCreateValidation(body);
    await authorizationMiddleware(body.user, ["admin", "pharmacy"], body.id);
    const { data, error } = await supabase
      .from("pharmacy")
      .update({
        name: body.name,
        address: `Point(${body.address.longtiude} ${body.address.latitude})`,
        emails: body.emails,
        phonenumbers: body.phonenumbers,
      })
      .eq("id", body.id)
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Pharmacy;
  }

  static async addPharamacy(body: any): Promise<Pharmacy> {
    body = pharamacyMedicineCreateValidation(body);
    // await authorizationMiddleware(body.user, ["admin"]);
    const { data, error } = await supabase
      .from("pharmacy")
      .insert({
        id: body.id,
        name: body.name,
        address: `Point(${body.address.longtiude} ${body.address.latitude})`,
        emails: body.emails,
        phonenumbers: body.phonenumbers,
      })
      .select("*")
      .single();
    if (error) throw new ServerError();
    return data as Pharmacy;
  }
}
