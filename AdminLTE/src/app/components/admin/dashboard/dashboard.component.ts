import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  host: { 'collision-id': 'DashboardComponent' },
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {}
}
