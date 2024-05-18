import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { cert } from 'src/app/entities/cert.entities';
import { Employee } from 'src/app/entities/employee.entities';
import { Role } from 'src/app/entities/role.entities';
import { CertService } from 'src/app/Services/cert.service';
import { RoleService } from 'src/app/Services/Role.service';

@Component({
  selector: 'app-demo9',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './demo9.component.html',
  styleUrl: './demo9.component.css',
})
export class Demo9Component implements OnInit {
  registerForm: FormGroup;
  certs: cert[];
  roles: Role[];
  photo: File;
  constructor(
    private fromBuilder: FormBuilder,
    private certService: CertService,
    private roleService: RoleService
  ) {}
  ngOnInit(): void {
    this.certs = this.certService.getCerts();
    this.roles = this.roleService.getRoles();
    this.registerForm = this.fromBuilder.group({
      username: 'abc',
      password: 'xyz',
      description: '',
      gender: '',
      certId: '2',
      status: true,
      roleId: '3',
      id: 123,
      address: this.fromBuilder.group({
        street: 'abc',
        ward: 'xyz',
      }),
    });
  }
  selectPhoto(event: any) {
    this.photo = event.target.files[0];
  }
  save() {
    console.log('save');
    let employee: Employee = this.registerForm.value as Employee;
    if (this.photo != null) {
      employee.photo = this.photo.name;
    } else {
      employee.photo = 'xyz';
    }

    console.log(employee);
  }
}
