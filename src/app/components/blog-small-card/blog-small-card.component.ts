import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-small-card',
  templateUrl: './blog-small-card.component.html',
  styleUrls: ['./blog-small-card.component.css']
})
export class BlogSmallCardComponent implements OnInit {
  image:string = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  title:string = 'Lorem ipsum dolor sit amet, consectetur.';
  description:string = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus,
    ac dapibus ligula. Aliquam vestibulum mauris non ipsum rutrum suscipit id vel tortor.
  `;

  constructor() {

  }

  ngOnInit(): void {

  }
}
