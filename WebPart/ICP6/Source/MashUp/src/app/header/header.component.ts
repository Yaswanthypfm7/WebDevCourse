import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    '.background {background:#00B446; color: white}',
    'li a { color: white}',
    'ul.nav a:hover { color: #fffccc  }'
  ]
})
export class HeaderComponent {
  constructor() {}

  }
