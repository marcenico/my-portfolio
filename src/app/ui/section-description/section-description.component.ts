import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-description',
  template: '<h2 class="o-text o-text--md o-mb-2">{{ section | translate }}</h2>'
})
export class SectionDescriptionComponent {
  @Input() section!: any;

  constructor() {}
}
