import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavBarComponent } from '../../core/layout/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NavBarComponent],
})
export class HomeComponent {}