import { Component } from '@angular/core';
// The app root is a selector and it comes from index.html file
@Component({
  selector: 'app-root',
  // This points to the html file
  templateUrl: './app.component.html',
  // This points to the css file
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
}
