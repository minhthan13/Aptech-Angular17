import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './aboutUs.component.html',
  host: { 'collision-id': 'AboutUsComponent' },
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      let id = p.get('id');
      console.log(id);
    });
  }
  constructor(private activatedRoute: ActivatedRoute, private route: Router) {}
  Redirect1() {
    this.route.navigate(['home']);
  }
  Redirect2() {
    let id = 789;
    let username = 'username';
    this.route.navigate(['news', { id, username }]);
  }
}
