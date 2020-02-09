import { Component, OnInit } from '@angular/core';
import { fromEvent } from "rxjs";
import {map,filter, debounceTime} from "rxjs/operators";
import { UserServices } from '../shared/services/user.services';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userServices: UserServices) { }

  ngOnInit() {
    let search = document.getElementById("search");
    let observer = fromEvent(search, "keyup").pipe(map((e:any) => {
     return e.target.value
    }),
      filter(text => text.length >= 4),
    debounceTime(2000)
    );
    observer.subscribe(item => {
      console.log(item);
    });

this.userServices.getPost().subscribe(item => {
  console.log(item);
})


  }

}
