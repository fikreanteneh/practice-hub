import { User } from "@supabase/supabase-js";
import supabase from "../config/supabase";
import { ServerError } from "../errors";
import authorizationMiddleware from "../middlewares/authorizationMiddleware";
import Auth from "../models/Auth";
import {
  adminValidation,
  authRequestValidation,
  pharmacyCreateValidation,
} from "../validations";
import AdminService from "./adminService";
import PharmacyService from "./pharmacyService";

export default class AuthService {
  // static async getUser(body: string): Promise<any> {
  //   const user = await supabase.from("user").select("*").eq("id", body).single();
  //   if (user.error) throw user.error;
  //   return user.data;
  // }
  static async createAcount(body: any, role: string): Promise<User> {
    const { data, error } = await supabase.auth.admin.createUser({
      email: body.email,
      password: body.password,
      user_metadata: { role: role },
    });
    if (error) throw error;
    return data.user;
  }

  static async adminRegister(body: any, user: Auth | null): Promise<User> {
    let { authRequest, adminData } = body;
    authRequest = authRequestValidation(authRequest);
    adminData = adminValidation(adminData);
    await authorizationMiddleware(user, ["admin"]);
    const admin = await this.createAcount(authRequest, "admin");
    await AdminService.addAdmin({ id: admin.id, name: adminData.name });
    return admin;
  }

  static async pharmacyRegister(body: any, user: Auth | null): Promise<User> {
    let { authRequest, pharmactData } = body;
    authRequest = authRequestValidation(authRequest);
    pharmactData = pharmacyCreateValidation(pharmactData);
    await authorizationMiddleware(user, ["admin"]);
    const pharmacy = await this.createAcount(authRequest, "pharmacy");
    await PharmacyService.addPharamacy({
      id: pharmacy.id,
      name: pharmactData.name,
      address: pharmactData.address,
      emails: pharmactData.emails,
      phonenumbers: pharmactData.phonenumbers,
    });
    return pharmacy;
  }

  static async deleteUser(body: string, user: Auth | null): Promise<any> {
    await authorizationMiddleware(user, ["admin", "pharmacy"], body);
    const { data, error } = await supabase.auth.admin.deleteUser(body);
    if (error) throw new ServerError();
    return data;
  }
  // static async signin(body: any): Promise<any> {
  //   const { user, session, error } = await supabase.auth.admin.\({
  //     email: body.email,
  //     password: body.password,
  //   });
  //   if (error) throw error;
  //   return { user, session };
  // }

  // static async createProfile(body: User, role: string): Promise<any> {
  //   const profile = await supabase.from("user").insert([
  //     {
  //       authid: body.id,
  //       role: role,
  //     },
  //   ]);
  //   if (profile.error) throw profile.error;
  //   const profileData = await supabase
  //     .from("user")
  //     .select("*")
  //     .eq("authid", body.id)
  //     .single();
  //   if (profileData.error) throw profileData.error;

  //   const { data, error } = await supabase.auth.admin.updateUserById(
  //     body.id,
  //     {user_metadata: { role: role, id: profileData.data.id }});

  //   if (error) throw error;
  //   return profileData.data;
  // }
}
