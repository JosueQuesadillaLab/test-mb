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

  ngOnInit() {
  }

  logOut(){
    console.log("log out")
    this._authService.logout().then( () => {
      this.router.navigate(['/login']);
    }) ;
  }

}
