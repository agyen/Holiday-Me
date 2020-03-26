import { NgModule, Directive, Pipe } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RequesterComponent } from "./requester/requester.component";
import { FormComponent } from "./form/form.component";
import { LoginComponent } from "./login/login.component";
import { NavigateComponent } from './navigate/navigate.component';

const routes: Routes = [
  { path: "", redirectTo: "/navigate", pathMatch: "full" },
  { path: "requester", component: RequesterComponent },
  { path: "form", component: FormComponent },
  { path: "login", component: LoginComponent },
  { path: "navigate", component: NavigateComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true, onSameUrlNavigation: "reload" } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
