import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: fadeAnimation
})
export class PortfolioComponent implements OnInit {
  isVisible = false;
  portfolioItems: any[] = [];

  constructor(private translateService: TranslateService) {
    this.translateService.get('portfolio').subscribe((res: any) => {
      this.portfolioItems = [
        {
          image: 'assets/gifs/project-world-cup.gif',
          title: `${res.items[0]?.title}<a class="o-text--h4 o-text--first-color" href="https://latinad.com/" target="_blank">LatinAd</a>`,
          description: `${res.items[0]?.description}`,
          pageLink: undefined,
          gitHubLink: undefined
        }
      ];
    });
  }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe(({ translations }) => {
      this.portfolioItems = [
        {
          image: 'assets/gifs/project-world-cup.gif',
          title: `${translations.portfolio.items[0].title}<a class="o-text--h4 o-text--first-color" href="https://latinad.com/" target="_blank">LatinAd</a>`,
          description: `${translations.portfolio.items[0].description}`,
          pageLink: undefined,
          gitHubLink: undefined
        }
      ];
    });
  }
}
