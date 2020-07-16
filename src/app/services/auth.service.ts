
import { Injectable } from '@angular/core';

import 'firebase/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { User } from '../models/user';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import * as actions from '../store/actions';

import { Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userSubscription : Subscription = new Subscription();
  private _user : User;

  constructor( 
    public auth: AngularFireAuth,
    public firestore : AngularFirestore,
    public store : Store<AppState>
  ) { }

  get user(){
    return this._user;
  }

  initAuthListener(){
    this.auth.authState.subscribe( fuser => {
      
      if( fuser ){
        this.userSubscription = this.firestore.doc(`${ fuser.uid}/usuario`).valueChanges()
        .subscribe( (fireStoreUser:any) => {          
          const user = User.fromFirebase( fireStoreUser); 
          this._user = user;
          this.store.dispatch( actions.setUser( {user} ));
        });
      } else {
        this.userSubscription.unsubscribe();
        this.store.dispatch( actions.unSetUser());
      }

    });
  }

  newUser(name: string , email: string , password: string){  
    return this.auth.createUserWithEmailAndPassword( email , password )
    .then( ({user}) => {
      const newUser = new User(user.uid , name , user.email);
      return this.firestore.doc(`${ user.uid }/usuario`).set({...newUser});
    });
  }

  loginUser( email: string , password: string){
    return this.auth.signInWithEmailAndPassword( email , password);
  }

  logout(){
    return this.auth.signOut();
  }

  isAuth(){
    return this.auth.authState.pipe(
      map( fbUser => fbUser !=null)
    );
  }

}
