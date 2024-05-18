import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/entities/account.entities';
import { AccountService } from 'src/app/Services/Account.Service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService,
    private formBuilder: FormBuilder
  ) {}
  ProfileGroup: FormGroup;
  username: string;
  account: Account;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      this.username = p.get('username');
      this.account = this.accountService.findByUsername(this.username);
      this.ProfileGroup = this.formBuilder.group({
        username: this.account.username,
        password: '',
        fullName: this.account.fullName,
      });
    });
  }
}
