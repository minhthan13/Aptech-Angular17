import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  host: { 'collision-id': 'ContactComponent' },
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}
}
