
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

// import { IngresoegresoComponent } from './ingresoegreso/ingresoegreso.component';
// import { DetailComponent } from './detail/detail.component';
// import { StatisticsComponent } from './statistics/statistics.component';
// import { PerfilComponent } from './perfil/perfil.component';
// import { NavbarComponent } from './../shared/navbar/navbar.component';


@NgModule({
  declarations: [
    // NavbarComponent,
    // PerfilComponent,
    // StatisticsComponent,
    // IngresoegresoComponent,
    // DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    // NavbarComponent,
    // PerfilComponent,
    // StatisticsComponent,
    // IngresoegresoComponent,
    // DetailComponent
  ]
})
export class DashboardModule { }
