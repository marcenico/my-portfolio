import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

const HOME_SECTION_ID = 'home';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(window:resize)': 'onResize($event.target.innerWidth)'
  }
})
export class NavbarComponent implements OnInit {
  showMenu = false;
  isClickInside = false;
  hideOpenCloseMenuStates = true;
  activeSection = HOME_SECTION_ID;

  constructor(private scroller: ViewportScroller, private eRef: ElementRef, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.onResize(window.innerWidth);
    this.scroller.scrollToAnchor(HOME_SECTION_ID);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goTo(sectionId: string) {
    this.activeSection = sectionId;
    this.scroller.setOffset([0, 120]);
    this.scroller.scrollToAnchor(sectionId);
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isClickInside && this.showMenu ? this.toggleMenu() : null;
      this.isClickInside = false;
      return;
    }

    this.isClickInside = true;
  }

  getTheme() {
    return this.themeService.getTheme();
  }

  onResize(width: number) {
    const BREAKPOINT_WIDTH = 1101;

    if (width >= BREAKPOINT_WIDTH) {
      this.showMenu = false;
      this.hideOpenCloseMenuStates = true;
      return;
    }

    this.hideOpenCloseMenuStates = false;
  }
}
