import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(
    private _authService : AuthService,
    public router: Router
  ) { }

  title: string = 'AGM project';
  lat: number;
  lng: number;
  zoom:number;

  ngOnInit() {
    
  }

  // Get Current Location Coordinates
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 18;
        console.log(this.lat, this.lng , this.zoom);
      });
    }
  }

  logOut(){
    console.log("log out")
    this._authService.logout().then( () => {
      this.router.navigate(['/login']);
    }) ;
  }

}
