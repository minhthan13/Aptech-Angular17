import { Component } from '@angular/core';
import { Demo2Component } from './Components/demo2/demo2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Demo2Component],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'DemoAngular';
}
