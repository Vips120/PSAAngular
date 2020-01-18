import { Component } from "@angular/core";
@Component({
    selector: "app-parent",
    template: `
    <div class="container">
      <div class="row">
      <div class="col-md-12">
      <h1>PARENT SECTION</h1>
      <app-child [name]="userName"></app-child>
      </div>
      </div>
    </div>
    
    
    `
})

export class ParentComponent {
    public userName: string = "JOHN DOE";
}