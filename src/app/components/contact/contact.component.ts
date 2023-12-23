import { Component } from '@angular/core';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: fadeAnimation
})
export class ContactComponent {
  isVisible = false;

  constructor() {}
}
