import { Component, Input } from "@angular/core";
@Component({
    selector: "app-child",
    template: `
    <div class="container">
      <div class="row">
      <div class="col-md-12">
      <h3>CHILD</h3>
      {{name}}
      </div>
      </div>
    </div>
    
    
    `
})

export class ChildComponent {
  @Input()  public name: string;
}