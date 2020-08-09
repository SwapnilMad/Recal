import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { QrserviceService} from '../qr/qrservice.service'

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  camera_img = '/assets/camera.png'
  
  constructor(private qrScanCtrl: QRScanner, private socketservice: QrserviceService) { }
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];

  scanqr(){
    this.qrScanCtrl.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        this.ionApp.style.display = 'none';
        const scanSub = this.qrScanCtrl.scan().subscribe((text) => {
          this.socketservice.setupSocketConnection(text)
          this.socketservice.socket.on('hi', (data) => console.log(data), (err) => console.log(err))
          this.qrScanCtrl.hide(); 
          this.ionApp.style.display = 'block'
          scanSub.unsubscribe(); 
            
          },(err)=>{
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

  ngOnInit() {
  }

}
