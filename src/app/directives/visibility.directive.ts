import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})
export class VisibilityDirective {
  @Output() visibilityChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkVisibility() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    this.visibilityChange.emit(isVisible);
  }
}
