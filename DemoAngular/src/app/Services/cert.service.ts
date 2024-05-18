import { Injectable } from '@angular/core';
import { cert } from '../entities/cert.entities';

@Injectable({
  providedIn: 'root',
})
export class CertService {
  certs: cert[];
  constructor() {
    this.certs = [
      { id: 1, name: 'cert 1' },
      { id: 2, name: 'cert 2' },
      { id: 3, name: 'cert 3' },
      { id: 4, name: 'cert 4' },
    ];
  }
  getCerts(): cert[] {
    return this.certs;
  }
}
