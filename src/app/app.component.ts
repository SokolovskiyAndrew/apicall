import {Component} from '@angular/core';
import {LogService} from './shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apicall';
  name: string;

  constructor(private logger: LogService) {}

  testLog(): void {
    this.logger.log('Test the log() Method');
  }
}
