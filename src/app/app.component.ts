import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private meta: Meta) {
    this.detectColorScheme();
    this.initLanguange();
    register();
  }

  ngOnInit(): void {
    this.meta.addTag({
      name: 'description',
      content:
        'Marcelo Nicolas Puebla is a web developer based in Mendoza, Argentina. Visit my portfolio website to see more of my work.'
    });
    this.meta.addTag({
      name: 'keywords',
      content: 'web developer, portfolio, angular, javascript, css, html, bootstrap, sass, nodejs, angular, git, github'
    });
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

  initLanguange() {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
  }
}
