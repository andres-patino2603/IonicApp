import { AfterViewInit, Component } from '@angular/core';
import {Router} from '@angular/router';
import {Swiper} from 'swiper';
import { Storage } from '@ionic/storage-angular';

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

  constructor(private router: Router,
    private storage: Storage) {
  }
  //Funcion para botones/navegacion, importar import {Router} from '@angular/router'; y declarar luego en el constructor
  goToIntro(){
    this.router.navigateByUrl('/intro');//Doc: https://ionicframework.com/docs/angular/navigation
    this.storage.set('mostreLaIntro', true);
  };
}
