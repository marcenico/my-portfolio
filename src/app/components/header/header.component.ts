import { Component, ElementRef, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:resize)': 'onResize($event.target.innerWidth)'
  }
})
export class HeaderComponent implements OnInit {
  showMenu = false;
  isClickInside = false;
  hideOpenCloseMenuStates = true;
  activeSection = 'home';

  constructor(private scroller: ViewportScroller, private eRef: ElementRef, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.onResize(window.innerWidth);
    this.scroller.setOffset([0, 100]);
    this.scroller.scrollToAnchor('home');
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goTo(id: string) {
    if (this.activeSection === id) return;
    this.activeSection = id;
    this.scroller.scrollToAnchor(id);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.isClickInside = true;
    } else {
      if (this.isClickInside && this.showMenu) this.toggleMenu();
      this.isClickInside = false;
    }
  }

  getTheme() {
    return this.themeService.getTheme();
  }

  onResize(width: any) {
    if (width >= 1101) {
      this.showMenu = false;
      this.hideOpenCloseMenuStates = true;
      return;
    }

    this.hideOpenCloseMenuStates = false;
  }
}
