import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template:`
  <h4>Single ng-content</h4>
  <ng-content></ng-content>

  <h4>Multiple ng-content</h4>
  <ng-content select="header"></ng-content>
  <ng-content select="body"></ng-content>
  <ng-content select="footer"></ng-content>

  <b>Multiple ng-content with CSS Selectors</b>
  <ng-content select=".red"></ng-content>
  <ng-content select=".blue"></ng-content>
  `
})
export class HomeComponent {

}
