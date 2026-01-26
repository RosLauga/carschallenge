import { AsyncPipe } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, ViewChild } from "@angular/core";
import { SlideCardComponent } from "./slide-card/slide-card.component";
import { CarDetailModel } from "../../../domain/cars/models/car-detail.model";
import { SwiperOptions } from "swiper/types";

@Component({
    selector: "app-slide",
    templateUrl: "./slide.component.html",
    styleUrl: "./slide.component.css",
    imports: [SlideCardComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class SlideComponent {
    public slideCarDetail = input<CarDetailModel>()   
    
    public breakPoints = {
      640: { slidesPerView: 1, initialSlide: 1 },
      1024: { slidesPerView: 3, initialSlide: 2  },
      1128: { slidesPerView: 4, initialSlide: 3  },
    };

}