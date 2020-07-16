import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresosEgresos } from './../models/ingresosegresos';

@Injectable({
  providedIn: 'root'
})
export class IngresoegresoService {

  
  uid: string;

  constructor(
    public firestore : AngularFirestore
  ) { }

  createIngresoEgreso( ingresoegreso : any , uid: string ){

    return this.firestore.doc(`${uid}/ingreso-egreso`)
        .collection('items')
        .add({...ingresoegreso});

  }  


  initIngresoEgresosListener( uid: string ){

    return this.firestore.collection(`${uid}/ingreso-egreso/items`)
        .snapshotChanges()
        .pipe(
          map( snapshot => snapshot.map( doc => ({
                uid: doc.payload.doc.id,
                ...doc.payload.doc.data() as any
              }))
          )
        );

  }

  deleteIe ( uid : string , ieid: string ) {

    return this.firestore.doc(`/${uid}/ingreso-egreso/items/${ieid}`).delete();

  }



}
