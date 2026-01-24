import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Button, NavButtonComponent } from "../../../shared/components";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NavButtonComponent],
})
export class NavBarComponent {

    public isMenuOpen = signal(false)
    public buttons = signal<Button[]>([{
        title: "Modelos",
        index: 0,
        path: "home"
    },
    {
        title: "Ficha de modelo",
        index: 1,
        path: "detail"
    }
    ])
}