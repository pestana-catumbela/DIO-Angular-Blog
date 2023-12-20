import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  bigCardDatas = [
    {
      bigCardImage: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      bigCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bigCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula. Aliquam vestibulum mauris non ipsum rutrum suscipit id vel tortor. Sed massa est, bibendum at finibus ac, euismod ultrices nisi. Pellentesque hendrerit sollicitudin euismod.'
    },

    {
      bigCardImage: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
      bigCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bigCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula. Aliquam vestibulum mauris non ipsum rutrum suscipit id vel tortor. Sed massa est, bibendum at finibus ac, euismod ultrices nisi. Pellentesque hendrerit sollicitudin euismod.'
    },

    {
      bigCardImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      bigCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      bigCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula. Aliquam vestibulum mauris non ipsum rutrum suscipit id vel tortor. Sed massa est, bibendum at finibus ac, euismod ultrices nisi. Pellentesque hendrerit sollicitudin euismod.'
    }
  ];

  smallCardDatas = [
    {
      smallCardImage: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png?20220519031949',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    },

    {
      smallCardImage: 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg',
      smallCardTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      smallCardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus urna dolor, id semper sem dapibus ut. Morbi iaculis tempus lacus, ac dapibus ligula.'
    }
  ];

  constructor() {

  }

  ngOnInit(): void {

  }
}
