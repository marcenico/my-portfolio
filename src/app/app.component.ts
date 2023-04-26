import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.detectColorScheme();
    register();
  }

  detectColorScheme() {
    let theme = 'light';

    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        theme = 'dark';
      }
    } else if (!window.matchMedia) {
      return;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark');
      theme = 'dark';
    }

    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
}
