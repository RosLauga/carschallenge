import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { NavBarComponent } from '../../core/layout/nav-bar/nav-bar.component';
import { MainComponent } from "../../core/layout/main/main.component";
import { Store } from '@ngrx/store';
import { getCarsList } from '../../domain/cars/states/cars/cars.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [NavBarComponent, MainComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    private readonly store = inject(Store)   

    ngOnInit(): void {
                console.log('HomeComponent destroyed');

        this.store.dispatch(getCarsList())  
    }
    ngOnDestroy() {
        console.log('HomeComponent destroyed');
    }
}