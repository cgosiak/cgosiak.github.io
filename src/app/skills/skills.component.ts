import { Component, OnInit, ViewChild } from '@angular/core';
import {Skill} from '../skill/skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  columns: number;
  skills: Skill[] = [
    {
      name: 'Angular', caption: 'Modern Web Development',
      image: 'assets/images/angular.png', description: '\n' +
      'Angular is a platform that makes it easy to build applications with the web. ' +
      'Angular combines declarative templates, dependency injection, end to end tooling, ' +
      'and integrated best practices to solve development challenges. Angular empowers developers ' +
      'to build applications that live on the web, mobile, or the desktop.',
      website: 'https://angular.io'
    },
    {
      name: 'Flutter', caption: 'Modern Cross Platform Mobile App Development',
      image: 'assets/images/flutter.png',
      description: 'Flutter is Google’s mobile app SDK for crafting high-quality native ' +
      'interfaces on iOS and Android in record time. Flutter works with existing code, is used by' +
      ' developers and organizations around the world, and is free and open source.',
      website: 'https://flutter.io'
    },
    {
      name: 'Ionic', caption: 'Cross Platform Mobile App Development',
      image: 'assets/images/ionic.png',
      description: 'Ionic is a complete open-source SDK for hybrid mobile app development created by Max Lynch,' +
      ' Ben Sperry and Adam Bradley of Drifty Co. in 2013. The original version was released in 2013 and built ' +
      'on top of AngularJS and Apache Cordova. The more recent releases, known as Ionic 3 or simply "Ionic", ' +
      'are built on Angular.',
      website: 'https://ionicframework.com/'
    },
    {
      name: 'Android', caption: 'Mobile App Development',
      image: 'assets/images/android.png',
      description: 'Android is a mobile operating system developed by Google, based on a modified version ' +
      'of the Linux kernel and other open source software and designed primarily for touchscreen mobile ' +
      'devices such as smartphones and tablets.',
      website: 'https://android.com'
    },
  ];

  constructor() {}

  ngOnInit() {
    this.columns = this.getColumns();
  }

  onResize() {
    this.columns = this.getColumns();
  }

  private getColumns() {
    if (window.innerWidth <= 950) {
      return 1;
    } else if (window.innerWidth > 950 && window.innerWidth <= 1425) {
      return 2;
    } else if (window.innerWidth > 1425 && window.innerWidth <= 1900) {
      return 3;
    } else {
      return 4;
    }
  }
}
