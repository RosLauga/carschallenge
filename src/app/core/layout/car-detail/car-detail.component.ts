import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { carDetail, isLoadingcarDetail } from "./states/car-detail.selectors";
import { AsyncPipe, CommonModule } from "@angular/common";
import { SlideComponent } from "../slide/slide.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { ScrollRevealDirective } from "../../../shared/components/scroll-animation/scroll-animation.component";
@Component({
  selector: "app-car-detail",
  templateUrl: "./car-detail.component.html",
  styleUrl: "./car-detail.component.css",
  imports: [
    CommonModule,
    AsyncPipe,
    SlideComponent,
    MatProgressSpinnerModule,
    ScrollRevealDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarDetailComponent {
  private readonly store = inject(Store);
  public isLoading$ = this.store.select(isLoadingcarDetail);
  public carDetail$ = this.store.select(carDetail);
}
