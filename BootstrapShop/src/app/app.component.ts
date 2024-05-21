import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Event,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { SearchComponent } from './components/layouts/search/search.component';
import { CarouselSlideComponent } from './components/layouts/carousel-slide/carousel-slide.component';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterLink, SearchComponent, CarouselSlideComponent],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  isHomepage: boolean;
  childData: string;

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //plan 1: get data from childen component
        let route = this.activatedRoute.firstChild;
        // kiểm tra activatedRoute này có phải là route con cuối cùng hay không
        while (route?.firstChild) {
          route = route.firstChild;
        }
        this.childData = route.snapshot.data['isHome'] ??= '';
        console.log(`check data: ${this.childData}`);
        //==============//
        // plan 2:  check endpoint
        this.isHomepage = event.url === '/home' || event.url === '/';
      });
  }
}
