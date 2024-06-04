import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/entities/account.entities';
import { AccountDTO } from 'src/app/entities/accountDTO.entities';
import { AccountAPIService } from 'src/app/Services/Account-API.Service';
import { AccountService } from 'src/app/Services/Account.Service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  host: { 'collision-id': 'ProfileAPIComponent' },
})
export class ProfileAPIComponent implements OnInit {
  constructor(
    private accountService: AccountAPIService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ProfileForm: FormGroup;
  username: string;
  ngOnInit(): void {
    this.accountService
      .findAccountUsername(sessionStorage.getItem('username'))
      .then(
        (res) => {
          let account: AccountDTO = res as AccountDTO;
          this.ProfileForm = this.formBuilder.group({
            username: account.username,
            password: '',
            fullName: account.fullName,
            email: account.email,
            dob: account.dob,
          });
        },
        (err) => {}
      );
  }

  save() {
    this.accountService.UpdateAcount(this.ProfileForm.value).then(
      (res) => {
        let result: boolean = res['result'];
        if (result) {
          alert('update success');
        } else {
          alert('update failed');
        }
      },
      (err) => {
        alert('update failed');
      }
    );
  }
}
