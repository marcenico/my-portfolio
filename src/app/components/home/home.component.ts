import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: fadeAnimation
})
export class HomeComponent {
  constructor() {}

  downloadCV() {
    const fileUrl = localStorage.getItem('lang') === 'en' ? 'assets/files/cv-en.pdf' : 'assets/files/cv-es.pdf';

    window.open(fileUrl, '_blank');
  }
}
