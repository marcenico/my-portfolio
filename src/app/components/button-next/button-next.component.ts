import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-next',
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.scss']
})
export class ButtonNextComponent implements OnInit {
  @Input('sectionId') nextSectionId = '';

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  goToNextSection() {
    this.scroller.setOffset([0, 64]);
    this.scroller.scrollToAnchor(this.nextSectionId);
  }
}
