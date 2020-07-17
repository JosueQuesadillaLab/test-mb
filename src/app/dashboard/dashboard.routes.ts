import { Routes } from '@angular/router';

import { MusicplayerComponent } from './musicplayer/musicplayer.component';
import { GeolocationComponent } from './geolocation/geolocation.component';

export const dashboardRoutes: Routes =[
    { 
        path: '',
        component : MusicplayerComponent
      },
    { path: 'music-player' , component : MusicplayerComponent},
    { path: 'geolocation' , component : GeolocationComponent},
];