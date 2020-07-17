
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { MusicplayerComponent } from './musicplayer/musicplayer.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
  MusicplayerComponent,
  GeolocationComponent,
  NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    AgmCoreModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MusicplayerComponent,
    GeolocationComponent,
    NavbarComponent   
  ]
})
export class DashboardModule { }
