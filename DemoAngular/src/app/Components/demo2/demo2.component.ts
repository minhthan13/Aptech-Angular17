import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/entities/invoices.entities';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css',
})
export class Demo2Component implements OnInit {
  ngOnInit(): void {
    this.invoice = {
      id: 1,
      name: 'invoice 1',
      payment: 'cash',
      customer: {
        id: 1,
        name: 'customer 1',
        address: 'address 1',
      },
      products: [
        {
          id: 1,
          name: 'product 1',
          photo: 'Docker.jpeg',
          price: 3.2,
          quantity: 10,
        },
        {
          id: 2,
          name: 'product 2',
          photo: 'Flutter.png',
          price: 17,
          quantity: 21,
        },
        {
          id: 3,
          name: 'product 3',
          photo: 'postman.jpg',
          price: 21.5,
          quantity: 17,
        },
      ],
    };
    console.log(this.invoice);
  }
  invoice: Invoice;
}
