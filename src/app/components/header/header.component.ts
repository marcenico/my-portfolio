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

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  goTo(id: string) {
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
}
