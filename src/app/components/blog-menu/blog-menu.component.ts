import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-menu',
  templateUrl: './blog-menu.component.html',
  styleUrls: ['./blog-menu.component.css']
})

export class BlogMenuComponent implements OnInit {
  items:string[] = [];
  links:string[] = [];

  constructor() {
    this.items = ['LinkedIn', 'GitHub', 'YouTube'];
    this.links = ['https://www.linkedin.com/', 'https://github.com/', 'https://www.youtube.com/'];
  }

  ngOnInit(): void {

  }
}
