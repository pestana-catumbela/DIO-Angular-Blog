import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-big-card',
  templateUrl: './blog-big-card.component.html',
  styleUrls: ['./blog-big-card.component.css']
})

export class BlogBigCardComponent implements OnInit {
  @Input()
  id:string | null = '';

  @Input()
  bigCardTitle:string = '';

  @Input()
  bigCardImage:string = '';

  @Input()
  bigCardDescription:string = '';

  constructor() {

  }

  ngOnInit(): void {

  }
}
