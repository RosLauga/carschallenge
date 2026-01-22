import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from "@angular/core";
import { Button, ButtonComponent } from "../../../shared/components";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonComponent],
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