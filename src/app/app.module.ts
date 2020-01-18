import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from "./course.component";
import { Course } from "./course";
import { Custom } from "./styleandclass";
import { ParentComponent } from "./parent.component";
import { ChildComponent} from "./child.compoennt";
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Custom,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Course],
  bootstrap: [AppComponent]
})
export class AppModule { }
