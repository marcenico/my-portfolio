import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  constructor(
    private scroller: ViewportScroller,
    private eRef: ElementRef,
    private themeService: ThemeService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.onResize(window.innerWidth);
    this.scroller.setOffset([0, 64]);
    this.scroller.scrollToAnchor(HOME_SECTION_ID);
  }

  toggleLang() {
    const currentLang = localStorage.getItem('lang');
    localStorage.setItem('lang', currentLang === 'en' ? 'es' : 'en');
    this.translateService.use(this.getLang());
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goTo(sectionId: string) {
    this.activeSection = sectionId;
    this.scroller.setOffset([0, 64]);
    this.scroller.scrollToAnchor(sectionId);
  }

  getLang(): string {
    const lang = localStorage.getItem('lang');
    return lang === 'en' ? 'es' : 'en';
  }

  getTheme() {
    return this.themeService.getTheme();
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
