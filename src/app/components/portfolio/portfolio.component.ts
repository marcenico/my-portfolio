import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {
  portfolioItems: any[];

  constructor() {
    this.portfolioItems = [
      {
        image: 'assets/gifs/project-world-cup.gif',
        title:
          'Project for <a class="o-text--h4 portfolio__swiper-data-link" href="https://latinad.com/" target="_blank">LatinAd</a>',
        description:
          'This system was designed to be displayed on various public screens, ensuring that viewers in public places could easily access up-to-date and relevant details about the tournament.',
        pageLink: undefined,
        gitHubLink: undefined
      }
      // {
      //   image: 'assets/images/desktop-1.jpg',
      //   title: 'Project 2',
      //   description: 'Project 2 description',
      //   pageLink: 'undefined',
      //   gitHubLink: 'undefined'
      // },
      // {
      //   image: 'assets/images/desktop-1.jpg',
      //   title: 'Project 3',
      //   description: 'Project 3 description',
      //   pageLink: undefined,
      //   gitHubLink: undefined
      // }
    ];
  }

  ngOnInit(): void {}
}
