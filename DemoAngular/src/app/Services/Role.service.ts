import { Injectable } from '@angular/core';
import { Role } from '../entities/role.entities';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  roles: Role[];
  constructor() {
    this.roles = [
      { id: 1, name: 'Role 1' },
      { id: 2, name: 'Role 2' },
      { id: 3, name: 'Role 3' },
      { id: 4, name: 'Role 4' },
    ];
  }
  getRoles(): Role[] {
    return this.roles;
  }
}
