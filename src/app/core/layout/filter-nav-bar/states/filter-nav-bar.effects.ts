import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filterList, filterListSucceded } from "./filter-nav-bar.actions";
import { inject, Injectable } from "@angular/core";
import { exhaustMap } from "rxjs";

@Injectable()
export class FilterNavBarEffects {
  private actions$ = inject(Actions);

  filterCarsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(filterList),
      exhaustMap(async () => filterListSucceded()),
    );
  });
}
