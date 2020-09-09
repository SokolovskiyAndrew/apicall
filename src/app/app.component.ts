import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apicall';
  name: string;

  sayHello(): void {
    console.log(`Hello ${this.name}`);

  }
}
