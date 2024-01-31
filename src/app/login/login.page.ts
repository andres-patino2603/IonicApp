import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages: {
    email: { type: string; message: string }[];
    password: { type: string; message: string }[];
    [key: string]: { type: string; message: string }[]; // Firma del índice
  } = {
    email: [
      { type: 'required', message: 'El Email es obligatorio' },
      { type: 'pattern', message: 'El Email ingresado es invalido' },
    ], //Validaciones para password
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      {
        type: 'pattern',
        message: 'La contraseña debe contener mayusculas, minusculas y numeros',
      },
      {
        type: 'minlength',
        message: 'La contraseña debe superar los 8 caracteres',
      },
    ],
  };

  loginMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage,
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9_.+-]+@[a-zA-Z-0-9-]+.[a-zA-Z0-9-.]+$'
          ),
        ])
      ),
      //Hacer validators de password
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
        ])
      ),
    });
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register'); //Doc: https://ionicframework.com/docs/angular/navigation
  }

  ngOnInit() {}

  login(login_data: any) {
    console.log(login_data);
    this.authService
      .loginUser(login_data)
      .then((res) => {
        this.loginMessage = res;
        this.storage.set('userLoggedIn', true);
        this.navCtrl.navigateForward('/menu/home');
      })
      .catch((err) => {
        this.loginMessage = err;
      });
  }
}
