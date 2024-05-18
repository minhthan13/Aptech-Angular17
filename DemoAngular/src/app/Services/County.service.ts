import { Injectable } from '@angular/core';
import { Country } from '../entities/country.enties';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  countries: Country[];
  constructor() {
    this.countries = [
      {
        id: 1,
        name: 'usa',
        flag: 'Flutter.png',
        area: 100,
        cities: [
          { id: 1, name: 'new york' },
          { id: 2, name: 'atlanta' },
          { id: 3, name: 'lousiana' },
        ],
      },
      {
        id: 2,
        name: 'canada',
        flag: 'Java.jpg',
        area: 100,
        cities: [
          { id: 4, name: 'city 4' },
          { id: 5, name: 'city 5' },
        ],
      },
      {
        id: 3,
        name: 'vietnam',
        flag: 'Flutter.png',
        area: 100,
        cities: [
          { id: 6, name: 'city 6' },
          { id: 7, name: 'city 7' },
          { id: 8, name: 'city 8' },
        ],
      },
    ];
  }
  findAll(): Country[] {
    return this.countries;
  }
  findCountry(id: any): Country {
    return this.countries.find((c) => c.id == id);
  }
}
