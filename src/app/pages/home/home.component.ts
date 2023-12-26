import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @Input()
  id:string[] | null = [];
  array:number = 0;

  bigCardDatas = [
    {
      bigCardTitle: '',
      bigCardImage: '',
      bigCardDescription: ''
    }
  ];

  smallCardDatas = [
    {
      smallCardTitle: '',
      smallCardImage: '',
      smallCardDescription: ''
    }
  ];

  constructor(private route:ActivatedRoute) {
    this.id = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = this.id);

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string[] | null) {
    const result:any[] = [dataFake.filter(article => article.id)]

    const bigCardDatas = [
      {
        bigCardTitle: result[this.array][0].title,
        bigCardImage: result[this.array][0].image,
        bigCardDescription: result[this.array][0].content
      },

      {
        bigCardTitle: result[this.array][1].title,
        bigCardImage: result[this.array][1].image,
        bigCardDescription: result[this.array][1].content
      },

      {
        bigCardTitle: result[this.array][2].title,
        bigCardImage: result[this.array][2].image,
        bigCardDescription: result[this.array][2].content
      }
    ];

    const smallCardDatas = [
      {
        smallCardTitle: result[this.array][3].title,
        smallCardImage: result[this.array][3].image,
        smallCardDescription: result[this.array][3].content
      },

      {
        smallCardTitle: result[this.array][4].title,
        smallCardImage: result[this.array][4].image,
        smallCardDescription: result[this.array][4].content
      },

      {
        smallCardTitle: result[this.array][5].title,
        smallCardImage: result[this.array][5].image,
        smallCardDescription: result[this.array][5].content
      },

      {
        smallCardTitle: result[this.array][6].title,
        smallCardImage: result[this.array][6].image,
        smallCardDescription: result[this.array][6].content
      },

      {
        smallCardTitle: result[this.array][7].title,
        smallCardImage: result[this.array][7].image,
        smallCardDescription: result[this.array][7].content
      },

      {
        smallCardTitle: result[this.array][8].title,
        smallCardImage: result[this.array][8].image,
        smallCardDescription: result[this.array][8].content
      },

      {
        smallCardTitle: result[this.array][9].title,
        smallCardImage: result[this.array][9].image,
        smallCardDescription: result[this.array][9].content
      },

      {
        smallCardTitle: result[this.array][10].title,
        smallCardImage: result[this.array][10].image,
        smallCardDescription: result[this.array][10].content
      },

      {
        smallCardTitle: result[this.array][11].title,
        smallCardImage: result[this.array][11].image,
        smallCardDescription: result[this.array][11].content
      },

      {
        smallCardTitle: result[this.array][12].title,
        smallCardImage: result[this.array][12].image,
        smallCardDescription: result[this.array][12].content
      }
    ];

    this.bigCardDatas = bigCardDatas;
    this.smallCardDatas = smallCardDatas;
  }
}
