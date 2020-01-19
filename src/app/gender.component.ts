import { Component } from "@angular/core";
@Component({
    selector: "app-gender",
    template:`
    <div class="container">
    <div class="row">
    <div class="col-md-12">
     <button type="button" class="btn btn-danger btn-md"
      (click)="gender=female"
      [disabled]="gender== female"
     >Female</button>
     <button type="button" class="btn btn-info btn-md"
     (click)="gender=male"
     [disabled]="gender== male"
     >male</button>
    </div>
    <div class="col-md-12" *ngIf="gender">
    <img src="{{gender.imgurl}}">
    <h2>{{gender.name}}</h2>
    </div>
    </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter name"
     #username
    >
    </div>
    <div class="form-group">
    <input type="text" class="form-control" placeholder="enter email"
    #email
    >
    </div>
    <button type="button" class="btn btn-danger btn-md"
     (click)="Adddata(username,email)"
    >Submit</button>
    </div>
    
    
    `
})

export class GenderComponent {
    public gender;
    public male = {
        name: "JOHN DOE",
        imgurl: "../assets/img/face2.jpg"
    };
    public female = {
        name: "Emma Doe",
        imgurl: "../assets/img/face1.jpg"
    };
    Adddata(name,mail) {
        console.log(name.value);
        console.log(mail.value);
    }
}