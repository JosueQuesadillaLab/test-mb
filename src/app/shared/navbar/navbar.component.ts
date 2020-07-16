import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
