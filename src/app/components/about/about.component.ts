import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: fadeAnimation
})
export class AboutComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const targetElement = document.getElementById('about');
    if (!targetElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting ? true : false;
      });
    });

    observer.observe(targetElement);
  }
}
