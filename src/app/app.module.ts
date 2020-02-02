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
import { Userscomponent } from './user.component';
import { StoreUserComponent } from './store.user.component';
import { ProductComponent } from './product.component';
import { StudentComponent } from './student.component';
import { StudentPipe } from './student.pipe';
import { ProductDetailsComponent } from './product.details.compoent';
import { Details } from './details.pipe';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Imagepipe } from './image.pipe';
import { CustomerTComponent } from './customer-t/customer-t.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    Custom,
    ParentComponent,
    ChildComponent,
    Countlike,
    Likecomponent,
    GenderComponent,
    Userscomponent,
    StoreUserComponent,
    ProductComponent,
    StudentComponent,
    StudentPipe,
    ProductDetailsComponent,
    Details,
    Imagepipe,
    CustomerTComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Course],
  bootstrap: [AppComponent]
})
export class AppModule { }
