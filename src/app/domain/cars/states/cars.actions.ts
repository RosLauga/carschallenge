import { createAction, props } from "@ngrx/store";
import { CarModel } from "../models/cars.entity";

// Search bye title
export const getCarsList = createAction(
  "[Cars List] Cars List",
);

export const getCarsListSucceded = createAction(
  "[Cars List] Cars List Succeded",
  props<{cars: CarModel[]}>()
)



