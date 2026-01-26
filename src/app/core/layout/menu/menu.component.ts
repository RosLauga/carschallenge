import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: [MatButtonModule],
  templateUrl: `./menu.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {

  public menuItems = input<string[]>([
    "Modelos",
    "Servicios y Accesorios",
    "Financiación",
    "Reviews y Comunidad",
    "break",
    "Toyoya Mobility Service",
    "Toyota Gazoo Racing",
    "Toyota Hidridos",
    "break",
    "Concesionarios",
    "Test Drive",
    "Contacto",
    "break",
    "Actividades",
    "Servicios al Cliente",
    "Ventas Especiales",
    "Innovación",
    "Prensa",
    "Acerca de"
  ])

 }
