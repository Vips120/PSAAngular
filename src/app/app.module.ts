import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from "./course.component";
import { Course } from "./course";
import { Custom } from "./styleandclass";
import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.compoennt";
import { Countlike } from "./count.like.component";
import { Likecomponent} from "./like.component";
import { GenderComponent } from './gender.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Custom,
    ParentComponent,
    ChildComponent,
    Countlike,
    Likecomponent,
    GenderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Course],
  bootstrap: [AppComponent]
})
export class AppModule { }
