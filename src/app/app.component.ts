import { Component, ViewChildren, QueryList, OnDestroy } from '@angular/core';

import { Platform, IonRouterOutlet, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Toast } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {


  backButtonSubscription: any;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.backButtonEvent();
      this.splashScreen.hide();
    });
  }
  backButtonEvent() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/tabs/tab1') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            navigator['app'].exitApp();
          } else {
            this.showToast('Press back again to exit App.');
            this.lastTimeBackPress = new Date().getTime();
          }
        }else if(this.router.url === '/tabs/tab2'){
          this.router.navigateByUrl('',{ skipLocationChange: true })
        }else if(this.router.url === '/tabs/tab3'){
          this.router.navigateByUrl('',{ skipLocationChange: true })
        }
      });
    });
  }

 
  async showToast(msg) {
    await Toast.show({
      text: msg
    });
  }
  ngOnDestroy() {
    // Unregister the custom back button action for this page
    this.backButtonSubscription.unsubscribe();
  }
}
