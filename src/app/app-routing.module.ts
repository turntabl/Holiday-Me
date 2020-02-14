import { NgModule, Directive, Pipe } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RequesterComponent } from "./requester/requester.component";
import { FormComponent } from "./form/form.component";
import { MatTableDataSource } from "@angular/material/table";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "requester", component: RequesterComponent },
  { path: "form", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
