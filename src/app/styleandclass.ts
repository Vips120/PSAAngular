import { Component } from "@angular/core";
@Component({
    selector: "app-custom",
    template: `

    <div>
    <i class="fa fa-3x" aria-hidden="true"
     [class.fa-star-o]="!activeStar"
     [class.fa-star]="activeStar"
     (click)="Star()"
    ></i>
    </div>

    <div  
    [class.container]="isActive"
    [class.content]="!isActive"
     [ngClass]="{
         container: isActive,
         content: !isActive
     }"
    
    >
    <h2
        [ngStyle]="{
            color: isActive ? 'red': 'green',
            background: isActive ? 'black': 'white'
        }"
    (click)="ChangeStyle()"
    >HELLO USER</h2>
    </div>
    <button type="button" class="btn"
       [class.btn-outline-primary]="!isActive"
       [class.btn-outline-danger]="isActive"
    >SUBMIT</button>

   
    
    `,
    styles: [`
      .container{
          width:400px;
          height:4000px;
          background:teal;
      }
      .content {
          width:600px;
          height:600px;
          background:orange
      }
    
    `]
})

export class Custom {
    public isActive: boolean = false;
    public activeStar: boolean = false;
    constructor() { }
    ChangeStyle() {
        this.isActive = !this.isActive;
    };
    Star() {
        this.activeStar = !this.activeStar;
    }
}