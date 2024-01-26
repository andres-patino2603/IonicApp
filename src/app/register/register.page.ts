import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage: Storage) { 
      this.registerForm = this.formBuilder.group({
        email: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9_.+-]+@[a-zA-Z-0-9-]+.[a-zA-Z0-9-.]+$"
            ),
          ])
        ),
        password: new FormControl(
          "",
          Validators.compose([
            Validators.required,
            Validators.minLength(8),  
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
          ])
        ),
        name: new FormControl(
          "",Validators.compose([
            Validators.required,
            Validators.pattern("^[a-zA-Z]+$"),
          ])
          
        ),
        lastName: new FormControl(
          "",Validators.compose([
            Validators.required,
            Validators.pattern("^[a-zA-Z]+$"),
          ])
          
        ),
        confirmPassword: new FormControl(
          "",Validators.compose([
            Validators.required,
            Validators.minLength(8),  
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
          ])
          
        ),
      },{
        Validators: this.ConfPass('password', 'confirmPassword'),
      })
    }

  ngOnInit() {
    
  }
  PassNovalido(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('confirmPassword')?.value;

    if(pass1 !== pass2){
      return true;
    }else{
      return false;
    }
  }
  ConfPass(pass: string, pass2:string) {
  
    return (FormGroup: FormGroup) => {
      const pass1control = FormGroup.get(pass);
      const pass2control = FormGroup.get(pass2);

      if(pass1control?.value === pass2control?.value){
        pass2control?.setErrors(null);
      }else{
        pass2control?.setErrors({NoEsIgual: true});
      }

    }
  }

  register(register_data: any) {
    console.log(this.PassNovalido());
    
  }
}
