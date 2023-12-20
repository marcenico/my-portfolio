import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: fadeAnimation
})
export class ContactComponent implements OnInit {
  isVisible = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const targetElement = document.getElementById('contactme');
    if (!targetElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting ? true : false;
      });
    });

    observer.observe(targetElement);
  }
}
