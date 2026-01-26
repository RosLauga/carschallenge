import {
  CarAPIModel,
  CarSegmentAPI,
  CarSegmentUI,
} from "../../domain/cars/models/cars.model";

export class CarMapper {
  private static carMapperAPItoUI(segment: CarSegmentAPI): CarSegmentUI {
    const segmentApiToUiMap: Record<CarSegmentAPI, CarSegmentUI> = {
      Sedan: "cars",
      "Pickups y Comerciales": "pickups",
      SUVs: "suvs",
    };
    return segmentApiToUiMap[segment];
  }
  static mappedCars(cars: CarAPIModel[]) {
    const carsMapped = cars.map((car) => {
      return { ...car, segment: this.carMapperAPItoUI(car.segment) };
    });
    return carsMapped;
  }
}
