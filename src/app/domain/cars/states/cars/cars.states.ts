import { CarModel } from "../../models/cars.model";

export interface CarsStates {
  cars: CarModel[];
  filtered:CarModel[];
  isLoading: boolean;  
}
