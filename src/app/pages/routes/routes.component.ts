import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { DetailComponent } from "../detail/detail.component";

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,    
      children:[
       {
      component: HomeComponent,    
      path: "detail/:carId",
      }]
  },
  {
    path: "**",
    redirectTo: "home",
  },
];
