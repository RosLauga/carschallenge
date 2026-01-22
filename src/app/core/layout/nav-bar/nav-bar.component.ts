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
        title: "Modelos"
    },
    {
        title: "Ficha de modelo"
    }
    ])
}