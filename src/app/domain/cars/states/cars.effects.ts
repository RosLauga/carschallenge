import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  getCarsList,
  getCarsListSucceded,
} from "./cars.actions";
import { inject, Injectable } from "@angular/core";
import { exhaustMap, map, of } from "rxjs";
import { HttpAxiosServices } from "../../../core/services/http.services";
import { CarModel } from "../models/cars.entity";

@Injectable()
export class CarsEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);

  getCarsListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCarsList),
      exhaustMap(() => {
        return this.httpService.requestUrl<CarModel[]>("https://challenge.egodesign.dev/api/models/")
        .pipe(
          map((res) => {
          return getCarsListSucceded({cars: res});
        }))
      }),
    );
  });  
}