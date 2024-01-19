import { AfterViewInit, Component } from '@angular/core';
import {Swiper} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  swiperParams1 = {
    slidesPerView: 1,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    
    on: {
      init(){

      },
    }
  };
  constructor() {}

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');
    if(swiperEl)
    {
      Object.assign(swiperEl, this.swiperParams1);
    }

  }
}
