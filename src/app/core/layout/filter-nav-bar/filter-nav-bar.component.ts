import { Component, input, signal } from "@angular/core";
import { FilterNavButtonComponent, FilterNavButtonModel, FilterValues, OrderNavButtonModel, OrderValues } from "../../../shared/components/filter-nav-button/filter-nav-button.component";
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
selector: "app-filter-nav-bar",
templateUrl: "./filter-nav-bar.component.html",
styles:  [`
    .custom-menu { background-color: blue!important; }
  `],
imports: [FilterNavButtonComponent, MatButtonModule, MatMenuModule, MatIconModule]
})
export class FilterNavBarComponent {
   public filterNavButtons = signal<FilterNavButtonModel[]>([
    {
        title: "Todos",
        value: FilterValues.all
    },
    {
        title: "Autos",
        value: FilterValues.car
    },
    {
        title: "Pickups y Comerciales",
        value: FilterValues.pickups
    },
    {
        title: "SUVs y Crossovers",
        value: FilterValues.suvs
    }
   ]) 

   public orderNavButtons = signal<OrderNavButtonModel[]>([
    {
        title: "Limpiar",
        value: OrderValues.clean
    },
    {
        title: "De menor a mayor precio",
        value: OrderValues.asc
    },
    {
        title: "De mayor a menor precio",
        value: OrderValues.desc
    },
    {
        title: "Más nuevos primero",
        value: OrderValues.newer
    },
    {
        title: "Más viejos primero",
        value: OrderValues.older
    }
   ]) 

   
}