import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { CarCardComponent } from "../car-card/car-card.component";
import { CarModel } from "../../../domain/car.entity";
import { Observable } from "rxjs";
import { AsyncPipe } from "@angular/common";



@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    imports: [CarCardComponent, AsyncPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class MainComponent {

    public cars = input<Observable<CarModel[]>>()
    
}