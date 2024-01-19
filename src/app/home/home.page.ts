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
  //<ion-button *ngIf="i==1>Hola mundo</ion-button> <---------realizar validaciones (if-else)
  //para usar etiquetas es usar [innerHTML]="variable.lonecesario"
  //git add .
  //git commit -m "proyecto"
  //git push -u origin main
  slides = [
    {
      imagePath: '..\\assets\\Slide1.png',
      title: '¡Bienvenido a IonicApp!',
      description: 'Descubre experiencias en vivo y funciones emocionantes desde la comodidad de tu dispositivo. Explora, compra y disfruta.',
    },
    {
      imagePath: '..\\assets\\Slide2.png',
      title: 'Explora eventos de primera clase',
      description: 'Navega a través de una amplia variedad de eventos en vivo y funciones. Desde conciertos de tus artistas favoritos hasta emocionantes eventos deportivos, hay algo para todos.',
    },
    {
      imagePath: '..\\assets\\Slide3.png',
      title: '¡Consigue tus boletos en segundos!',
      description: 'Compra boletos de manera rápida y segura. Accede a asientos exclusivos y descubre ofertas especiales. ¡No te pierdas la oportunidad de vivir experiencias inolvidables!',
    },
    {
      imagePath: '..\\assets\\Slide4.png',
      title: 'Descubre ofertas especiales',
      description: 'Explora nuestras ofertas exclusivas y ahorra en la compra de tus boletos. ¡No dejes pasar la oportunidad de disfrutar eventos increíbles a precios increíbles!',
    },
    {
      imagePath: '..\\assets\\Slide5.png',
      title: 'Mantente actualizado',
      description: 'Recibe notificaciones sobre nuevos eventos, fechas de preventa y actualizaciones importantes. ¡No te pierdas ninguna oportunidad de vivir experiencias únicas!',
    },
    {
      imagePath: '..\\assets\\Slide6.png',
      title: 'Fácil y seguro',
      description: 'Compra tus boletos de manera fácil y segura con nuestro sistema de pago protegido. Garantizamos una experiencia sin complicaciones para que disfrutes al máximo.',
    },
  ]
  constructor() {
    
  }

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');
    if(swiperEl)
    {
      Object.assign(swiperEl, this.swiperParams1);
    }

  }
}
