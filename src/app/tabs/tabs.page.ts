import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const {SplashScreen} = Plugins; 


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  componentDidLoad(){
    SplashScreen.hide();
  }
  constructor() { }

}
