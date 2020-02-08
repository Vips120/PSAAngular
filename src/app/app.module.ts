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
// import { ProductComponent } from './product.component';
import { StudentComponent } from './student.component';
import { StudentPipe } from './student.pipe';
import { ProductDetailsComponent } from './product.details.compoent';
import { Details } from './details.pipe';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Imagepipe } from './image.pipe';
import { CustomerTComponent } from './customer-t/customer-t.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { routes } from "./apps.routes";
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { About3Component } from './about3/about3.component';
import { ProductComponent } from "./product/product.component";
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
    // ProductComponent,
    StudentComponent,
    StudentPipe,
    ProductDetailsComponent,
    Details,
    Imagepipe,
    CustomerTComponent,
    ReactiveformComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    About1Component,
    About2Component,
    About3Component,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [Course],
  bootstrap: [AppComponent]
})
export class AppModule { }
