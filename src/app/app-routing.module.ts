import { NgModule, Directive, Pipe } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequesterComponent } from "./requester/requester.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  // { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "requester", component: RequesterComponent },
  { path: "form", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
