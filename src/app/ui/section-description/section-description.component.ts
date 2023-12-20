import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-description',
  template: '<p class="o-text o-text--md o-mb-2">{{ section | translate }}</p>'
})
export class SectionDescriptionComponent {
  @Input() section!: any;

  constructor() {}
}
