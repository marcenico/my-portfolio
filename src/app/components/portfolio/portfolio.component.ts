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
        image: 'assets/images/desktop-1.jpg',
        title: 'Project 1',
        description: 'Project 1 description',
        pageLink: undefined,
        gitHubLink: undefined
      },
      {
        image: 'assets/images/desktop-1.jpg',
        title: 'Project 2',
        description: 'Project 2 description',
        pageLink: 'undefined',
        gitHubLink: 'undefined'
      },
      {
        image: 'assets/images/desktop-1.jpg',
        title: 'Project 3',
        description: 'Project 3 description',
        pageLink: undefined,
        gitHubLink: undefined
      }
    ];
  }

  ngOnInit(): void {}
}
