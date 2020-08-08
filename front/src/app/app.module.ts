import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { QRScanner,  } from '@ionic-native/qr-scanner/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QrserviceService } from './qr/qrservice.service'
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
//import { IonicStorageModule } from '@ionic/storage';

import { AuthenticationService } from './authentication.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    AuthenticationService,
    SafariViewController,
    QRScanner,
    QrserviceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
