export type Medicine = {
  id: string;
  name: string,
  exactname: string,
  amount: number,
};

export type MedicineCreate = {
  name: string,
  exactname: string,
  amount: number,
}

export type MedicineUpdate = {
  id: string;
  name: string,
  exactname: string,
  amount: number,
};
