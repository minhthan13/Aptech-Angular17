import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.css',
})
export class Demo3Component implements OnInit {
  ngOnInit(): void {
    this.fullName = 'abc';
    this.status = true;
    this.gender = 'm';
    this.roleId = '2';
    this.imgWidth = '120';
    this.imgHeight = '100';
  }
  fullName: string = '';
  status: boolean;
  gender: string;
  roleId: string;

  imgWidth: string;
  imgHeight: string;
}
