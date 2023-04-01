import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  isClickInside = false;

  constructor(private scroller: ViewportScroller, private eRef: ElementRef) {}

  ngOnInit(): void {}

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

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goTo(id: string) {
    this.scroller.scrollToAnchor(id);
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isClickInside = true;
    } else {
      if (this.isClickInside && this.showMenu) this.toggleMenu();
      this.isClickInside = false;
    }
  }

  getTheme() {
    return localStorage.getItem('theme');
  }
}
