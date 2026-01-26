import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewChild,
} from "@angular/core";
import { Button, NavButtonComponent } from "../../../shared/components";
import { MenuComponent } from "../menu/menu.component";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavButtonComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MenuComponent,
  ],
})
export class NavBarComponent {
  public isMenuOpen = signal(false);
  public buttons = signal<Button[]>([
    {
      title: "Modelos",
      index: 0,
      path: "home",
      isDisabled: false,
    },
    {
      title: "Ficha de modelo",
      index: 1,
      path: "detail",
      isDisabled: true,
    },
  ]);

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  toggleMenu() {
    this.isMenuOpen.set(this.trigger.menuOpen);
  }
}
