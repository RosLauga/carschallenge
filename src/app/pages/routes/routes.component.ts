import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,    
  },
  // {
  //   path: "car-detail",
  //   component: ""
  // },
  {
    path: "**",
    redirectTo: "dashboard",
  },
];
