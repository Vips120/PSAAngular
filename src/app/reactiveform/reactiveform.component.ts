import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { Iuser } from '../shared/model/user.reactive';
import { RegulserExpression } from './regx';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  public userForm: FormGroup;
  public submitted: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      "firstname": ['', [Validators.required, Validators.minLength(5),RegulserExpression.FirstName]],
      "lastname": ["", [Validators.required,RegulserExpression.LastName]],
      "address": ["", [Validators.required,RegulserExpression.Address]],
      "mobile": ["", [Validators.required, RegulserExpression.MobileNo]],
      "UserLogin": this.fb.group({
        "UserId": ["", [Validators.required,RegulserExpression.UserId]],
        "Password": ["", [Validators.required,RegulserExpression.Password]]
      })
    })
  }
  Save(item: Iuser) {
    this.submitted = true;
    if (!this.userForm.valid) { return;}
    console.log(item);
  }

}
