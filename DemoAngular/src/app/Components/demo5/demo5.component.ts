import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RectangleService } from 'src/app/Services/Rectangle.Service';

@Component({
  selector: 'app-demo5',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.css',
})
export class Demo5Component implements OnInit {
  thumnail: string;
  width: string;
  height: string;
  a: string;
  b: string;
  result: string;
  ngOnInit(): void {
    this.thumnail = 'assets/images/Background.png';
    this.width = '300';
    this.height = '300';
    this.result = '';
  }
  constructor(private rectangleService: RectangleService) {}
  clickMe(event: any) {
    console.log(event);
  }

  changeBG(event: any) {
    let color = event.target.value;
    console.log(color);
  }
  ChangePhoto(event: any) {
    this.thumnail = event.target.src;
  }
  Resize(event: any) {
    let size = event.target.value.split('x');
    console.log(size);
    this.width = size[0];
    this.height = size[1];
  }
  Areas() {
    this.result = this.rectangleService
      .Area(parseFloat(this.a), parseFloat(this.b))
      .toString();
    console.log(this.result);
  }
  Perimeters() {
    this.result = this.rectangleService
      .Perimeter(parseFloat(this.a), parseFloat(this.b))
      .toString();
    console.log(this.result);
  }
}
