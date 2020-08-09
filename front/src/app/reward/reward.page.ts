import { Component, AfterViewInit } from '@angular/core';
import { UserinfoService } from '../userinfo.service'

@Component({
  selector: 'app-reward',
  templateUrl: './reward.page.html',
  styleUrls: ['./reward.page.scss'],
})
export class RewardPage implements AfterViewInit {

  constructor(private service:UserinfoService ) { }
  rewards
  slideOpts= {
    initialSlide: 0,
    slidesPerView: 2,
    autoplay: true,
    loop: true,
    centeredSlides: true,
  };
  ngAfterViewInit(): void {
    this.service.getUserData('5f17b984d795b42898734e80').subscribe(data=>{
      console.log(data)
    },error=>console.log(error))
  }

  burger = '/assets/burger.jpg'
  pizza='/assets/pizza.jpg'
  choclate = '/assets/chocolate.jpg'
  cupcake='/assets/cupcake.jpg'
  donuts='/assets/donuts.jpg'
  ice_cream='/assets/ice_cream.jpg'

  
}
