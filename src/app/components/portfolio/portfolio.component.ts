import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: fadeAnimation
})
export class PortfolioComponent implements OnInit {
  isVisible = false;
  portfolioItems: any[];

  constructor() {
    this.portfolioItems = [
      {
        image: 'assets/gifs/project-world-cup.gif',
        title:
          'Project for <a class="o-text--h4 o-text--first-color" href="https://latinad.com/" target="_blank">LatinAd</a>',
        description: `This system was designed to be displayed on various public screens, ensuring that viewers in public places could easily access up-to-date and relevant details about the tournament.<br><br>Developed with Angular.`,
        pageLink: undefined,
        gitHubLink: undefined
      }
    ];
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
