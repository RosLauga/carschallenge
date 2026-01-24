import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  getCarsList,
  getCarsListSucceded,
} from "./cars.actions";
import { inject, Injectable } from "@angular/core";
import { exhaustMap, map, of } from "rxjs";
import { HttpAxiosServices } from "../../../../core/services/http.services";
import { CarAPIModel } from "../../models/cars.model";
import { CarMapper } from "../../../../core/mappers/car.mapper";

@Injectable()
export class CarsEffects {
  private actions$ = inject(Actions);
  private httpService = inject(HttpAxiosServices);

  getCarsListEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCarsList),
      exhaustMap(() => {
        return this.httpService.requestUrl<CarAPIModel[]>("https://challenge.egodesign.dev/api/models/")
        .pipe(
          map((res) => {
          const mappedCars = CarMapper.mappedCars(res)
          return getCarsListSucceded({cars: mappedCars});
        }))
      }),
    );
  });   
  
}