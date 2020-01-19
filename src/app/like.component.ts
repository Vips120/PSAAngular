import { Component,Input, EventEmitter, Output} from "@angular/core";
@Component({
    selector: "app-like",
    template: `
    <div class="container">
    <div class="row">
    <div class="col-md-12">
    <i class="fa fa-heart-o fa-3x" aria-hidden="true"
     [style.color]="islike ? 'red': 'black'"
     style="cursor:pointer"
     (click)="HeartLike()"
    ></i> 
    {{likecount}}
    </div>

    <div class="col-md-12">
    <button type="button" class="btn btn-danger btn-md"
     (click)="AddUser()"
    >Click ME</button>
    </div>
    </div>
    </div>
    
    
    `
})

export class Likecomponent {
    @Input() public likecount: number;
    public mail: string = "vs@gmail.com";
    public islike: boolean = false;
    @Output() Event = new EventEmitter(); 
    HeartLike() {
        this.islike = !this.islike;
        this.likecount += this.islike ? 1 : -1;
    };

    AddUser() {
        this.Event.emit({ mail: this.mail });
    }
}