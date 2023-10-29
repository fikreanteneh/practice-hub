import { Medicine } from "./Medicine";
import { Pharmacy } from "./Pharamcy";

export type PharmacyMedicine = {
  id: string;
  medicineid: string;
  pharmacyid?: string;
  price: number;
  quantity: number;
  medicine?: Medicine;
  pharmacy?: Pharmacy;
};

export type PharmacyMedicineCreate = {
  medicineid: string;
  pharmacyid: string;
  price: number;
  quantity: number;
};

export type PharmacyMedicineUpdate = {
  id: string;
  price: number;
  quantity: number;
};
