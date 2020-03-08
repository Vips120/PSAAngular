import { Component, OnInit } from '@angular/core';
import { UserRegisterServices } from '../shared/services/user.register.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedUserData: any;
  constructor(private userServices: UserRegisterServices,private router: Router) { }

  ngOnInit() {
    this.userServices.loggedUserData.subscribe(x => {
      console.log(x);
      this.loggedUserData = x;
    })
  }
  Logout() {
    this.userServices.Logout();
    this.router.navigateByUrl("/contact");
  }
}
