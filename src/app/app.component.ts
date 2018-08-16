import { Component, ViewChild, ElementRef } from '@angular/core';
import { WalkthroughComponent } from '../../node_modules/angular-walkthrough';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isInfoView: boolean;
  title = 'app';
  @ViewChild('walk1') walk1: WalkthroughComponent ;
  @ViewChild('walk2') walk2: WalkthroughComponent ;
  constructor() {
  }
  show() {
    this.walk1.open();
  }
  enableInfo() {
    this.isInfoView = !this.isInfoView;
  }
  showInfo() {
    this.walk1.open();
  }
  showInfo2() {
    this.walk2.open();
  }
}
