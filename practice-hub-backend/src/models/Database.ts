import { Medicine, MedicineCreate, MedicineUpdate } from "./Medicine";
import { Pharmacy, PharmacyCreate, PharmacyUpdate } from "./Pharamcy";
import { PharmacyMedicine, PharmacyMedicineUpdate, PharmacyMedicineCreate } from "./PharamcyMedicine";
import { Admin, AdminCreate, AdminUpdate } from "./Admin";

export default interface Database {
  public: {
    Tables: {
      medicine: {
        Row: Medicine;
        Insert: MedicineCreate;
        Update: MedicineUpdate;
      };
      pharmacymedicine: {
        Row: PharmacyMedicine;
        Insert: PharmacyMedicineCreate;
        Update: PharmacyMedicineUpdate;
      };
      pharmacy: {
        Row: Pharmacy;
        Insert: PharmacyCreate;
        Update: PharmacyUpdate;
      };
      admin: {
        Row: Admin;
        Insert: AdminCreate;
        Update: AdminUpdate;
      }
    };
  };
}
