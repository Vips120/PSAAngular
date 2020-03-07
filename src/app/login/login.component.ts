import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Ilogin } from "../shared/model/user.register";
import { UserRegisterServices } from '../shared/services/user.register.services';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLogin: FormGroup;
  public submitted: boolean = false;
  public validationError: string;
  constructor(private fb: FormBuilder, private userServices: UserRegisterServices, private router: Router) { }

  ngOnInit() {
    this.userLogin = this.fb.group({

      "UserLogin": this.fb.group({
        "UserName": ["", [Validators.required]],
        "Password": ["", [Validators.required]]
      })
    });
  }

  Save(data: Ilogin) {
    this.submitted = true;
    if (!this.userLogin.valid) { return; }
    console.log(data);
    this.userServices.UserLoginDetails(data)
      .subscribe( (data:any) => {
        if (data.Error) {
          console.log(data.Error);
          this.validationError = data.Error;
        } else {
          alert("Login done!");
          console.log(data);
          this.router.navigateByUrl("/home");
        }
  
    }
    )
  }

}
