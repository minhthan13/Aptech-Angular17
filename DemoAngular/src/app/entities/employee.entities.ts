import { Address } from './address.entities';

export class Employee {
  username: string;
  password: string;
  description: string;
  gender: string;
  certId: number;
  status: boolean;
  roleId: number;
  id: number;
  photo: string;
  address: Address;
}
