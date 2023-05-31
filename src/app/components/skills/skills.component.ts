import { Component, OnInit } from '@angular/core';
import { DropdownItem } from 'src/app/models/dropdown-item.model';
import { fadeAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: fadeAnimation
})
export class SkillsComponent implements OnInit {
  skillsFrontend: DropdownItem[] = [];
  skillsBackend: DropdownItem[] = [];
  isVisible = false;

  constructor() {}

  ngOnInit(): void {
    this.setFrontendSkills();
    this.setBackendSkills();
  }
  ngAfterViewInit(): void {
    const targetElement = document.getElementById('skills');
    if (!targetElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isVisible = entry.isIntersecting ? true : false;
      });
    });

    observer.observe(targetElement);
  }

  private setFrontendSkills() {
    this.skillsFrontend.push({ name: 'HTML', percent: 90 });
    this.skillsFrontend.push({ name: 'Css', percent: 95 });
    this.skillsFrontend.push({ name: 'JavaScript', percent: 85 });
    this.skillsFrontend.push({ name: 'Angular', percent: 95 });
  }

  private setBackendSkills() {
    this.skillsBackend.push({ name: 'Node.js', percent: 80 });
    this.skillsBackend.push({ name: 'Java', percent: 70 });
    this.skillsBackend.push({ name: 'Firebase', percent: 80 });
    this.skillsBackend.push({ name: 'MySQL', percent: 75 });
  }
}
