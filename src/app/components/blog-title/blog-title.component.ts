import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  templateUrl: './blog-title.component.html',
  styleUrls: ['./blog-title.component.css']
})

export class BlogTitleComponent implements OnInit {
  title:string = 'the blog';

  constructor() {
    this.title = this.title.toUpperCase();
  }

  ngOnInit(): void {

  }
}
