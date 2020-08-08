import { Component,AfterViewInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { QrserviceService} from '../qr/qrservice.service'
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../map/modal/modal.component'
import { AuthenticationService } from '../authentication.service'
//import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  authe
  constructor(private qrScanCtrl: QRScanner, private socketservice: QrserviceService, public modalController: ModalController, public auth:AuthenticationService) {
    this.authe=this.auth.loggedIn
    console.log('authe', this.authe)
   }
   
  login(){
    this.auth.login()
  }
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];


  async getMap(){
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    return await modal.present();
  }
  scanqr(){
    console.log('in scan')
    
    this.qrScanCtrl.prepare().then((status: QRScannerStatus) => {
      console.log(status.authorized)
      if (status.authorized) {
        this.ionApp.style.display = 'none';
        const scanSub = this.qrScanCtrl.scan().subscribe((text) => {
          console.log('Scanned something', text);
          this.socketservice.setupSocketConnection(text)
          this.socketservice.socket.on('hi', (data) => console.log(data), (err) => console.log(err))
          this.qrScanCtrl.hide(); 
          this.ionApp.style.display = 'block'
          scanSub.unsubscribe(); 
            
          },(err)=>{
            console.log('in error')
            console.log(err);
          });
          this.qrScanCtrl.show();

        } else if (status.denied) {
          this.qrScanCtrl.openSettings();
        } else {
          console.log('nothing is happening')
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
