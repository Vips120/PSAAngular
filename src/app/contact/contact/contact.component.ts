import { Component,OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Iregister } from 'src/app/shared/model/user.register';
import { UserRegisterServices } from 'src/app/shared/services/user.register.services';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public userRegister: FormGroup;
  public submitted: boolean = false;
  public validationError: string;
  constructor(private fb: FormBuilder, private userServices: UserRegisterServices) { }

  ngOnInit() {
    this.userRegister = this.fb.group({
      "FirstName": ["", [Validators.required]],
      "LastName": ["", [Validators.required]],
      "MobileNo": ["", [Validators.required]],
      "EmailId": ["", [Validators.required]],
      "UserLogin": this.fb.group({
        "UserName": ["", [Validators.required]],
        "Password": ["", [Validators.required]]
      })
    });
  }

  Save(data: Iregister) {
    this.submitted = true;
    if (!this.userRegister.valid) { return; }
    console.log(data);
    this.userServices.UserRegistration(data)
      .subscribe( (data:any) => {
        if (data.Error) {
          console.log(data.Error);
          this.validationError = data.Error;
        } else {
          alert("Registration done!");
          console.log(data);
        }
  
      }
    )
  }

}
