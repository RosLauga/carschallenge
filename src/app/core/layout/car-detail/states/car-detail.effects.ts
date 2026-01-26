import { Actions, createEffect, ofType } from "@ngrx/effects";

import { inject, Injectable } from "@angular/core";
import { exhaustMap, map, of } from "rxjs";
import { CarDetailModel } from "../../../../domain/cars/models/car-detail.model";
import { HttpAxiosServices } from "../../../services/http.services";
import { getCarDetail, getCarDetailSucceded } from "./car-detail.actions";

@Injectable()
export class CarDetailEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);

  getCarDetailEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCarDetail),
      exhaustMap(({ id }) => {
        return this.httpService
          .requestUrl<CarDetailModel>(
            `https://challenge.egodesign.dev/api/models/${id}`,
          )
          .pipe(
            map((res) => {
              return getCarDetailSucceded({ car: res });
            }),
          );
      }),
    );
  });
}
