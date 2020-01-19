import { Component } from "@angular/core";
@Component({
    selector: "app-count",
    template: `
    <div class="container">
     <div class="row">
     <div class="col-md-12">
      <h1>{{mailer}}</h1>
     </div>
      <div class="col-md-12">
      <app-like [likecount]="userlikecount" (Event)="AddEvent($event)"></app-like>
      </div>
      <img src="{{imgurl}}" >
     </div>
    </div>
    
    `
})

export class Countlike {
    public userlikecount: number = 10;
    public mailer: string;
    public imgurl: string = "../assets/img/face1.jpg";
    constructor() { }
    AddEvent(data) {
        console.log(data);
        this.mailer = data.mail;
    }
}