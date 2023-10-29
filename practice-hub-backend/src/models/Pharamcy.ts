export type Pharmacy = {
  id: string;
  name: string;
  address: {
    lattitude: number;
    longitude: number;
  };
  phonenumbers: Array<string>;
  emails: Array<string>;
};

export type PharmacyCreate = {
  name: string;
  address: {
    lattitude: number;
    longitude: number;
  };
  phoneNumbers: Array<string>;
  emails: Array<string>;
};

export type PharmacyUpdate = {
  id: string;
  name: string;
  address: {
    lattitude: number;
    longitude: number;
  };
  phonenumbers: Array<string>;
  emails: Array<string>;
};
