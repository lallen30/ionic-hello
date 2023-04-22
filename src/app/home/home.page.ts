import { Component } from '@angular/core';
import { NativeScreen } from 'my-native-screen-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor() { }

  showHelloWorld() {
    NativeScreen.showHelloWorld();
  }

  hideHelloWorld() {
    NativeScreen.hideHelloWorld();
  }
}