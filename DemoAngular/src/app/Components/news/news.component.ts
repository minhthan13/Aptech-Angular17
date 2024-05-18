import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './news.component.html',
  host: { 'collision-id': 'NewsComponent' },
})
export class NewsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      let id = p.get('id');
      let username = p.get('username');
      console.log(`id >> : ${id}`);
      console.log(`Username >> : ${username}`);
    });
  }
}
