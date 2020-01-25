import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Icust } from "./shared/model/customer";
@Component({
    selector: "app-userstore",
    template: `
    <div class="container">
     <div class="row">
     <div class="col-md-4" *ngFor="let data of userdata">
     <div class="card text-white bg-primary"
     style="margin:10px"
   >
 <div class="card-body">
 <h2>{{data.id}}</h2>
   <h4 class="card-title">{{data.name}}</h4>
   <p class="card-text">{{data.email}}</p>
 </div>
</div>
</div>
     <div class="col-md-8">
     <div class="form-group">
     <input type="text" class="form-control" placeholder="Enter id" #id>
     </div>
     <div class="form-group">
     <input type="text" class="form-control" placeholder="Enter name" #name>
     </div>
     <div class="form-group">
     <input type="text" class="form-control" placeholder="Enter email" #email>
     </div>
     <button type="button" class="btn btn-danger btn-md" (click)="AddUser(id,name,email)">submit</button>
     </div>
     </div>
     </div>
    
    `
})

export class StoreUserComponent {
    @Input() userdata: Icust[];
    @Output() item = new EventEmitter<Icust>();
    constructor() { }
    AddUser(id, name, email) {
        let userId = id.value;
        let username = name.value;
        let useremail = email.value;
        this.item.emit({ id: userId, name: username, email: useremail});
        // console.log(`${id.reset} ${name.reset} ${email.reset}`);
        id.reset;
        name.reset;
        email.reset;
    }
}