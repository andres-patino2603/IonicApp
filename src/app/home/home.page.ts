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

  swiper_items = [
    { img: '../../assets/img-content/img1.png', color: '#ffcc00' },
    { img: '../../assets/img-content/img2.png', color: '#ff9900' },
    { img: '../../assets/img-content/img3.png', color: '#ff6666' },
    { img: '../../assets/img-content/img4.png', color: '#cc99ff' }
  ];

  swiper_ejemplo=[
    { img: 'imagen', color: '#ffcc00' },
  ]
  constructor(private router: Router,
    private storage: Storage) { }
 
  //Funcion para botones/navegacion, importar import {Router} from '@angular/router'; y declarar luego en el constructor
  goToIntro(){
    this.router.navigateByUrl('/intro');//Doc: https://ionicframework.com/docs/angular/navigation
    this.storage.set('mostreLaIntro', true);
  };
}
