import { Component, OnInit } from '@angular/core';
import {User} from ".././shared/model/template"
@Component({
  selector: 'app-customer-t',
  templateUrl: './customer-t.component.html',
  styleUrls: ['./customer-t.component.css']
})
export class CustomerTComponent implements OnInit {
  public Model = new User();
  constructor() { }

  ngOnInit() {
  };
  Save(data) {
    console.log(data);
  }

}
