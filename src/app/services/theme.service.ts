import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {}

  toggleTheme() {
    switch (localStorage.getItem('theme')) {
      case 'light':
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        break;
      case 'dark':
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
        break;
      default:
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        break;
    }
  }

  getTheme() {
    return localStorage.getItem('theme');
  }
}
