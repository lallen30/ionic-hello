import { Component } from '@angular/core';
import { MapboxCapacitorPlugin } from 'mapbox-capacitor-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  async showMapbox() {
    await MapboxCapacitorPlugin.showMapbox();
  }

}
