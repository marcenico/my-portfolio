import { Component, Input } from '@angular/core';
import { DropdownItem } from 'src/app/models/dropdown-item.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() title: string = 'Title';
  @Input() subtitle: string = 'Subtitle';
  @Input() icon: string = 'uil-brackets-curly';
  @Input() dropdownItems: DropdownItem[] = [{ name: 'Default Item', percent: 0 }];
  @Input() showItems: boolean = false;

  constructor() {}

  toggleDropdown() {
    this.showItems = !this.showItems;
  }
}
