import {Component, Input, OnInit} from '@angular/core';

export interface Skill {
  name: string;
  caption: string;
  image: string;
  description: string;
  website: string;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;

  constructor() { }

  ngOnInit() {
  }

}
