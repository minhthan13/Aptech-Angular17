import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Student } from 'src/app/entities/student.entities';

@Component({
  selector: 'app-demo10',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './demo10.component.html',
  styleUrl: './demo10.component.css',
})
export class Demo10Component implements OnInit {
  registerForm: FormGroup;
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          this.checkUsernameValidator,
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$'
          ),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      website: [
        '',
        [
          Validators.pattern(
            /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/
          ),
        ],
      ],
      age: [
        '',
        [
          Validators.required,
          Validators.min(18),
          Validators.max(60),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      gender: ['', [Validators.required]],
      photo: ['', [Validators.required]],
    });
  }
  constructor(private formBuilder: FormBuilder) {}

  save() {
    let student: Student = this.registerForm.value as Student;
    console.log('>>> Form: ', student);
  }
  checkUsernameValidator(control: AbstractControl) {
    let username = control.value;
    if (username == 'acc1') {
      return { exist: true };
    }
    return null;
  }

  selectPhoto(event: any) {
    let file: File = event.target.files[0];

    console.log(file);
    let fileName = file.name.split('\\').pop();
    if (
      file.type != 'image/gif' &&
      file.type != 'image/jpeg' &&
      file.type != 'image/png'
    ) {
      this.registerForm.controls['photo'].reset();
      this.registerForm.controls['photo'].setValidators([Validators.required]);
      this.registerForm.controls['photo'].updateValueAndValidity();
    } else {
      this.registerForm.controls['photo'].setValue(fileName);
    }
  }
}
