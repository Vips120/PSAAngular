import { Component } from "@angular/core";
@Component({
    selector: "app-student",
    template: `
    <div class="container">
    <div class="row">
     <div class="col-md-12">
     <ul *ngIf="std">
      <li>{{std.name | uppercase | lowercase}}</li>
      <li>{{std.rank | number}}</li>
      <li>{{std.price | currency:"INR"}}</li>
      <li>{{std.fltno | number:"2.2-2"}}</li>
      <li>{{std.date | date:"MM/dd/yyyy"}}</li>
      <li>{{std | json}}</li>
     </ul>
     </div>
     <h2>{{heading | pcontent:10}}</h2>
    </div>
    </div>
    
    `
})

export class StudentComponent {
    public std = {
        name: "raj",
        rank: 55454884563169026,
        price: 25000,
        fltno: 9.8669,
        date: new Date()
    };
    public heading = "Join Data Science Certification Courses in mumbai. iDeators is the Best Data Science Training Institute in mumbai with Placement assistance and offers a best";

}