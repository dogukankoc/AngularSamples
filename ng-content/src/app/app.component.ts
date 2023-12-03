import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent],
  template: ` 
  <h4>App Componenet</h4>
  <app-home>Test content, this area came from AppComponent
  <br>

  <header>ng-content header</header>
  <body>This is body</body>
  <footer>ng-content footer</footer>
  <br>

  <div class="red">Color is red</div>
  <div class="blue">Color is blue</div>
  </app-home>
  `
})
export class AppComponent {
  title = 'ng-content';
}
