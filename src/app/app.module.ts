import { BrowserModule } from "@angular/platform-browser";
<<<<<<< HEAD
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RequesterComponent } from "./requester/requester.component";
import { FormComponent } from "./form/form.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { ApproverComponent } from "./approver/approver.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule, MatNativeDateModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
// import { NgxAaaDatepickerModule } from 'ngx-aaa-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    RequesterComponent,
    FormComponent,
    ApproverComponent
  ],
=======
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RequesterComponent } from "./requester/requester.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, LoginComponent, RequesterComponent],
>>>>>>> master
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
    // NgxAaaDatepickerModule
=======
    HttpClientModule,
    MatButtonModule
>>>>>>> master
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
