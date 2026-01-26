import { CommonModule } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { Store } from "@ngrx/store";
import { setTabIndexAction } from "../../../domain/cars/states/globals/globals.actions";
import { setTabIndexSelector } from "../../../domain/cars/states/globals/globals.selectors";
import { RouterLink } from "@angular/router";

export interface Button {
  title: string;
  index: number;
  path: string;
  isDisabled: boolean;
  color?: string;
}

@Component({
  selector: "app-button",
  templateUrl: "./nav-button.component.html",
  styleUrl: "./nav-button.component.css",
  host: {
    class: "h-full",
  },
  imports: [CommonModule, RouterLink],
})
export class NavButtonComponent {
  private readonly store = inject(Store);
  public title = input<string>("");
  public index = input<number>(0);
  public path = input<string>("");
  public isDisabled = input<boolean>();
  public tabSelected = this.store.selectSignal(setTabIndexSelector);

  setTabIndex() {
    this.store.dispatch(setTabIndexAction({ index: this.index() }));
  }
}
