import { City } from './city.entities';

export class Country {
  id: number;
  name: string;
  flag: string;
  area: number;
  cities: City[];
}
