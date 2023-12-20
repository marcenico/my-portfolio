import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: '<p class="o-text o-text--h2 o-text--semi-bold o-mb-1-5">{{ section | translate }}</p>'
})
export class SectionTitleComponent {
  @Input() section!: any;

  constructor() {}
}
