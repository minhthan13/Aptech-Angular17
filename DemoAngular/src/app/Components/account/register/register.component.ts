import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AccountDTO } from 'src/app/entities/accountDTO.entities';
import { AccountAPIService } from 'src/app/Services/Account-API.Service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  host: { 'collision-id': 'registerAPIComponent' },
})
export class RegisterAPIComponent implements OnInit {
  router = inject(Router);
  formBuilder = inject(FormBuilder);
  accountAPIService = inject(AccountAPIService);

  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: '',
      password: '',
      fullName: '',
      email: '',
      dob: '',
    });
  }
  save() {
    let account: AccountDTO = this.registerForm.value as AccountDTO;
    this.accountAPIService.create(account).then(
      (res) => {
        let result: boolean = res['result'];
        if (result) {
          this.router.navigate(['login-api']);
        } else {
          alert('resgister failed');
        }
      },
      (err) => {
        alert('register failed: ' + err);
      }
    );
  }
}
