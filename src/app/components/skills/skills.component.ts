import { Component, OnInit } from '@angular/core';
import { fadeAnimation } from 'src/app/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: fadeAnimation
})
export class SkillsComponent implements OnInit {
  isVisible = false;
  skills: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setSkills();
  }

  private setSkills() {
    this.skills.push({ name: 'HTML', icon: 'assets/images/html-icon.svg' });
    this.skills.push({ name: 'CSS', icon: 'assets/images/css-icon.svg' });
    this.skills.push({ name: 'SASS', icon: 'assets/images/sass-icon.svg' });
    this.skills.push({ name: 'Bootstrap', icon: 'assets/images/bootstrap-icon.svg' });
    this.skills.push({ name: 'JavaScript', icon: 'assets/images/js-icon.svg' });
    this.skills.push({ name: 'NodeJs', icon: 'assets/images/nodejs-icon.svg' });
    this.skills.push({ name: 'Angular', icon: 'assets/images/angular-icon.svg' });
    this.skills.push({ name: 'Git', icon: 'assets/images/git-icon.svg' });
    this.skills.push({ name: 'GitHub', icon: 'assets/images/github-icon.svg' });
  }
}
