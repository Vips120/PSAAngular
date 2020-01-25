import { Component } from "@angular/core";
import { Icust } from "./shared/model/customer";
@Component({
    selector: "app-user",
    template: `
    <div class="container">
     <div class="row">
     <div>
     <app-userstore [userdata]="userData" (item)="Createuser($event)"></app-userstore>
     </div>
     </div>
    </div>
    
    
    `
})

export class Userscomponent {
    public userData:Icust[] = [{
        id: 1,
        name: "jack",
        email: "jack@gmail.com"
    },
    {
        id: 2,
        name: "james",
        email: "james@gmail.com"
    }, {
        id: 3,
        name: "raj",
        email: "raj@gmail.com"
    }, {
        id: 4,
        name: "rahul",
        email: "r@gmail.com"
    }
    ];
    constructor() { };
    Createuser(item: Icust) {
        // console.log(item);
        this.userData.unshift(item);
    }
}