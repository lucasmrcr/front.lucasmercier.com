import {Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: '../../../../template/home/navbar.component.html',
  styleUrls: ['../../../../style/home/navbar.component.scss']
})
export class NavbarComponent {

  navbarItems = [
    {
      name: 'Accueil',
      url: '#home',
      isHighlighted: false
    },
    {
      name: 'Projets',
      url: '#projects',
      isHighlighted: false
    },
    {
      name: 'Experiences',
      url: '#experiences',
      isHighlighted: false
    },
    {
      name: 'Prendre contact',
      url: '#contact',
      isHighlighted: true
    },
  ]

  constructor() { }
}
