import { createAction, props } from "@ngrx/store";
import { CarDetailModel } from "../../../../domain/cars/models/car-detail.model";

// Search bye title
export const getCarDetail = createAction(
  "[Car Detail] Car Detail",
  props<{id: number}>()
);

export const getCarDetailSucceded = createAction(
  "[Cars Detail] Cars Detail Succeded",
  props<{car: CarDetailModel}>()
)



