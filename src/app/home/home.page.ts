import { AfterViewInit, Component } from '@angular/core';
import {Router} from '@angular/router';
import {Swiper} from 'swiper';
import { Storage } from '@ionic/storage-angular';//import ionic storage


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  
  //<ion-button *ngIf="i==1>Hola mundo</ion-button> <---------realizar validaciones (if-else)
  //para usar etiquetas es usar [innerHTML]="variable.lonecesario"
  //git add .
  //git commit -m "proyecto"
  //git push -u origin main

  swiper_images = [
    '../../assets/img-content/img1.png',
    '../../assets/img-content/img2.png',
    '../../assets/img-content/img3.png',
    '../../assets/img-content/img4.png',
];

swiperParamsHome = {
  effect: 'coverflow',
  autoplay: true,
  grabCursor: true,
  centeredSlider: true,
  slidesPerView: 3,
  coverFlowEffect:{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    speed: 80,
    slideShadows: true,
  },
  
  on: {
    init(){

    },
  }
};

  constructor(private router: Router,
    private storage: Storage) { }

    
  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');
    if(swiperEl)
    {
      Object.assign(swiperEl, this.swiperParamsHome);
    }
  }  
  //Funcion para botones/navegacion, importar import {Router} from '@angular/router'; y declarar luego en el constructor
  goToIntro(){
    this.router.navigateByUrl('/intro');//Doc: https://ionicframework.com/docs/angular/navigation
    this.storage.set('mostreLaIntro', true);
  };
}
