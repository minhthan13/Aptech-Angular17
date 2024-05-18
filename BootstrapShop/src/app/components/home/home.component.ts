import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { take } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  host: { 'collision-id': 'HomeComponent' },
})
export class HomeComponent implements OnInit {
  constructor(private activaRoute: ActivatedRoute) {}
  ngOnInit(): void {}
}
