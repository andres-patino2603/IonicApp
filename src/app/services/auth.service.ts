import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject)=>
    {
      if(credential.email=='andrespatino0845@gmail.com' && credential.password=='Password123'){
        accept('login correcto');
      }else{
        reject('login incorrecto');
      }
    });
  }
  registerUser(credential2: any){
    return new Promise((accept, reject)=>
    {
      if(credential2.email!='andrespatino0845@gmail.com'){
        accept('El registro ha sido exitoso');
      }else{
        reject('El usuario ya existe');
      }
    });
  }
}
