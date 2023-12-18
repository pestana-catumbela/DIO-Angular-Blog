import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-big-card',
  templateUrl: './blog-big-card.component.html',
  styleUrls: ['./blog-big-card.component.css']
})

export class BlogBigCardComponent implements OnInit {
  image:string = 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  title:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  description:string = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus,
    ac dapibus ligula. Aliquam vestibulum mauris non ipsum rutrum suscipit id vel tortor. Sed massa est, bibendum at finibus ac, euismod
    ultrices nisi. Pellentesque hendrerit sollicitudin euismod.
  `;

  constructor() {

  }

  ngOnInit(): void {

  }
}
