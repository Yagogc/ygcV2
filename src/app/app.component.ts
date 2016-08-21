import { Component } from '@angular/core';
import { WorkComponent } from './work/index';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [WorkComponent]
})
export class AppComponent {
  title = 'app works!';
}
