import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/animations';
import { TranslateService } from '@ngx-translate/core';

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
          title: `${res.items[0].title}<a class="o-text--h4 o-text--first-color" href="https://latinad.com/" target="_blank">LatinAd</a>`,
          description: `${res.items[0].description}`,
          pageLink: undefined,
          gitHubLink: undefined
        }
      ];
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const targetElement = document.getElementById('portfolio');
    if (!targetElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting ? true : false;
      });
    });

    observer.observe(targetElement);
  }
}
