import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from "@angular/router"; 
import { contactRoutes } from './contact.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from '../login/login.component';

@NgModule({
  declarations: [ContactComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(contactRoutes),
    HttpClientModule
  ]
})
export class ContactModule { }
