import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators , FormBuilder, FormGroup  } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as actions from '../../store/actions';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , OnDestroy {

  constructor(
    private fb_login: FormBuilder,
    private _authService: AuthService,
    public router: Router,
    public store: Store<AppState>
  ) { }

  loginForm: FormGroup;
  cargando: boolean = false;
  subs: Subscription;

  ngOnInit() {

    this.loginForm = this.fb_login.group({
      email: ['', [Validators.required , Validators.email]],
      password: ['', Validators.required]
    });

    this.subs = this.store.select('ui').subscribe( ui => {
      this.cargando = ui.isLoading;
    })

  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onSubmitLogin(){
    
    if(this.loginForm.invalid) {return;}

    this.store.dispatch( actions.isLoading());

    const { email , password } = this.loginForm.value;
    this._authService.loginUser(email,password)
    .then( user => {
      this.store.dispatch( actions.stopLoading());
      this.router.navigate(['/']);
    })
    .catch( err => {
      this.store.dispatch( actions.stopLoading());
      console.log(err)
    });

  }

}
