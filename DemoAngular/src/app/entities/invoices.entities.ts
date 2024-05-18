import { Customer } from './customer.entities';
import { Product } from './product.entities';

export class Invoice {
  id: number;
  name: string;
  payment: string;
  customer: Customer;
  products: Product[];
}
