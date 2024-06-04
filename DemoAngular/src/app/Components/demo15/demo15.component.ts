import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-demo15',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './demo15.component.html',
  styleUrl: './demo15.component.css',
})
export class Demo15Component implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  isWelcome: boolean;
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //plan 1: get data from childen component

        //==============//
        // plan 2:  check endpoint
        this.isWelcome = event.url === '/welcome-api';
      });
  }
}
