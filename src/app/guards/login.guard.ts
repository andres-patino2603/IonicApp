import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private storage: Storage,
     private router: Router ){

  }
 async canActivate(){
    const userLoggedIn = await this.storage.get('userLoggedIn');
    if(userLoggedIn){
      console.log("Login correcto, me voy al home");
      return true;
    }else{
      console.log("El usuario no esta logueado");
      this.router.navigateByUrl('/intro');
      return false;
    }
  }
  
}
