import { CarModel } from "../models/cars.entity";

export interface CarsStates {
  cars: CarModel[];
  filtered:CarModel[];
  isLoading: boolean;  
}
