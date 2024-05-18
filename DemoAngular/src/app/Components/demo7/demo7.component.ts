import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-demo7',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.css',
})
export class Demo7Component implements OnInit {
  C: string;
  F: string;
  ngOnInit(): void {
    this.F = '';
  }
  Display(event: any) {
    console.log(event.target.value);
  }

  ConvertToF(event: any) {
    let c = parseFloat(event.target.value);
    this.F = (c * 1.8 + 32).toString();
  }
}
