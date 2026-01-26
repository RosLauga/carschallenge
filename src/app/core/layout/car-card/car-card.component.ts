import { CurrencyPipe } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { Store } from "@ngrx/store";
import { getCarDetail } from "../car-detail/states/car-detail.actions";
import { RouterLink } from "@angular/router";
import { setTabIndexAction } from "../../../domain/cars/states/globals/globals.actions";

@Component({
  selector: "app-car-card",
  standalone: true,
  templateUrl: "./car-card.component.html",
  imports: [CurrencyPipe, RouterLink],
})
export class CarCardComponent {
  private readonly store = inject(Store);
  id = input<number>(1);
  image = input<string>();
  title = input<string>();
  year = input<number>();
  price = input<number>();

  getCarDetail(id: number) {
    if (Number.isNaN(id)) {
      throw new Error("id param is missing");
    }
    this.store.dispatch(getCarDetail({ id }));
    this.store.dispatch(setTabIndexAction({ index: 1 }));
  }
}
