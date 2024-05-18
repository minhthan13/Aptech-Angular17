import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo11',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './demo11.component.html',
  styleUrl: './demo11.component.css',
})
export class Demo11Component implements OnInit {
  ngOnInit(): void {}
}
