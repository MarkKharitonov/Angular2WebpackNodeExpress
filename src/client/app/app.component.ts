import {Component, OnInit} from '@angular/core';

import {AppService} from './app.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent implements OnInit {
  helloFromServer: Observable<string>;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.helloFromServer = this.appService.getHelloFromServer();
  }
}
