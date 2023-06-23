import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: fadeAnimation
})
export class HomeComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const targetElement = document.getElementById('home');
    if (!targetElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting ? true : false;
      });
    });

    observer.observe(targetElement);
  }

  downloadCV() {
    const fileUrl = localStorage.getItem('lang') === 'en' ? 'assets/files/cv-en.pdf' : 'assets/files/cv-es.pdf';

    window.open(fileUrl, '_blank');
  }
}
