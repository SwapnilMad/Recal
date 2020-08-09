import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
import { ModalComponent } from '../map/modal/modal.component'
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  
  map_button = '/assets/maps_button.png'
  profile_button='/assets/profile_button.png'
  reward_button='/assets/rewards_button.png'
  splash_screen = '/assets/splash_screen.png'
  slide1 = '/assets/slide1.png'
  slide2 = '/assets/slide2.png'
  outer_c = '/assets/outer_circle.png'
  cam = '/assets/cam.png'
  home_button = '/assets/home_button.png'

  showMe:boolean=true
  @ViewChild('mySlider')  slides: IonSlides;

  constructor(public modalController: ModalController, public auth:AuthenticationService) {
    
  }

  swipeNext(){
    this.slides.slideNext();
  }
  
  ngAfterViewInit(): void {
  
  }
   
  ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];


  async getMap(){
    const modal = await this.modalController.create({
      component: ModalComponent,
    });
    return await modal.present();
  } 
}
