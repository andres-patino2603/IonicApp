import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  validation_messages: {
    email: { type: string; message: string }[];
    password: { type: string; message: string }[];
    name: { type: string; message: string }[];
    lastName: { type: string; message: string }[];
    confirmPassword: { type: string; message: string }[];
    [key: string]: { type: string; message: string }[]; // Firma del índice
  } = {
    email: [
      { type: 'required', message: 'El Email es obligatorio' },
      { type: 'pattern', message: 'El Email ingresado es invalido' },
    ],
    password: [
      { type: 'required', message: 'La contraseña es obligatoria' },
      {
        type: 'pattern',
        message: 'La contraseña debe contener mayúsculas, minúsculas y números',
      },
      {
        type: 'minlength',
        message: 'La contraseña debe superar los 8 caracteres',
      },
    ],
    name: [
      { type: 'required', message: 'El nombre es obligatorio' },
      { type: 'pattern', message: 'El nombre solo puede contener letras' },
    ],
    lastName: [
      { type: 'required', message: 'El apellido es obligatorio' },
      { type: 'pattern', message: 'El apellido solo puede contener letras' },
    ],
    confirmPassword: [
      {
        type: 'required',
        message: 'La confirmación de la contraseña es obligatoria',
      },
      {
        type: 'pattern',
        message:
          'La confirmación de la contraseña debe contener mayúsculas, minúsculas y números',
      },
      { type: 'match', message: 'Las contraseñas no coinciden' },
    ],
  };

  registerMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(
              '^[a-zA-Z0-9_.+-]+@[a-zA-Z-0-9-]+.[a-zA-Z0-9-.]+$'
            ),
          ])
        ),

        //validaciones para pass, conmf_pass, name y last-name junto a message_validations
        password: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[a-zA-ZÑñ])(?=.*[A-ZÑñ])(?=.*\d).{8,}$/),
          ])
        ),
        name: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-ZÑñ]+$'),
          ])
        ),
        lastName: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-ZÑñ]+$'),
          ])
        ),
        confirmPassword: new FormControl(
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^(?=.*[a-zA-ZÑñ])(?=.*[A-ZÑñ])(?=.*\d).{8,}$/),
          ])
        ),
      },
      {
        // Validators: this.mustBeEqualValidator('password', 'confirmPassword'),
        validator: this.match,
      }
    );
  }
  goToLogin() {
    this.navCtrl.navigateBack('/login'); //Doc: https://ionicframework.com/docs/angular/navigation
  }

  ngOnInit() {}
  match(control: AbstractControl): void | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');
    if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
      return null;
    }
    if (passwordControl?.value === confirmPasswordControl?.value) {
      return null;
    }
    confirmPasswordControl?.setErrors({ match: true });
  }

  register(register_data: any) {
    console.log('Datos del formulario:', register_data);
    this.authService.registerUser(register_data).then((res) => {
        this.registerMessage = res;
      })
      .catch((err) => {
        this.registerMessage = err;
      });
  }
}
