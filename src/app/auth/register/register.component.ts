import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder, FormGroup  } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';

import { Subscription } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb_register: FormBuilder,
    private _authService: AuthService,
    public router: Router,
    public store: Store<AppState>
  ) { }


  registerForm : FormGroup
  cargando: boolean = false;
  registerSubscription: Subscription = new Subscription();

  ngOnInit() {

    this.registerForm = this.fb_register.group({
      name: ['', Validators.required],
      email: ['', [Validators.required , Validators.email]],
      password: ['', Validators.required]
    });

    this.registerSubscription = this.store.select('ui').subscribe( ui => this.cargando = ui.isLoading);

  }

  ngOnDestroy(){
    this.registerSubscription.unsubscribe();
  }

  onSubmitRegister(){

    if(this.registerForm.invalid) {return;}

    this.store.dispatch( actions.isLoading());

    const { name , email , password } = this.registerForm.value;
    this._authService.newUser(name,email,password)
    .then( user => {
      this.store.dispatch( actions.stopLoading());
      this.router.navigate(['/']);
    })
    .catch( err => {
      this.store.dispatch( actions.stopLoading());
      Swal.fire({
        title: 'Error!',
        text: err.message,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    });

  }

}
