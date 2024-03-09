import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: '<h1 class="o-text o-text--h2 o-text--semi-bold o-mb-1-5">{{ section | translate }}</h1>'
})
export class SectionTitleComponent {
  @Input() section!: any;

  constructor() {}
}
