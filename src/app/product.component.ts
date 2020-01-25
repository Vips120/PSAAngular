import { Component } from "@angular/core";
@Component({
    selector: "app-product",
    template: `
    <div class="container">
    <div class="row">
     <div class="col-md-12">
     <h2 *ngIf="username.length >=3; else error">{{username}}</h2>
     <ng-template #error>
     <h2>username must be a 3 characters</h2>
     </ng-template>
     </div>
     <div class="col-md-12">
      <ul *ngFor="let course of courses; let i = index">
      <li>{{i + 1}} - {{course}}</li>
      </ul>
     </div>
    </div>
    <div class="row">
    <div class="col-md-12">
    <button type="button" class="btn btn-danger btn-md"
    style="margin:10px"
    (click)="choosetab='home'"
    >Home</button>
    <button type="button" class="btn btn-info btn-md"
    (click)="choosetab='about'"
    >About</button>
    </div>
    <div *ngIf="choosetab">
    <div class="col-md-12" 
     [ngSwitch]="choosetab"
    >
    <h2 *ngSwitchCase="'home'">Home Section</h2>
    <h2 *ngSwitchCase="'about'">About Section</h2>
    <h2 *ngSwitchDefault>Not Found </h2>
    </div>
    </div>
  
    </div>
    <div class="row">
    <div class="col-md-8">
    <div class="card text-white bg-secondary">
  <div class="card-body">
    <h4 class="card-title">
    <ng-content select=".heading"></ng-content>
    </h4>
    <hr/>
    <p class="card-text">
    <ng-content select=".body"></ng-content>
    </p>
  </div>
</div>
    </div>
    </div>
    </div>
    `
})

export class ProductComponent {
    public username: string = "vi";
    public choosetab;
    public courses: string[] = ["Angular", "Javascript", "Typescript", "Reactjs"];
}