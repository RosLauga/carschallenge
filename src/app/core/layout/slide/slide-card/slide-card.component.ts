import { Component, input } from "@angular/core";

@Component({
    selector: "app-slide-card",
    templateUrl: "./slide-card.component.html"    
})
export class SlideCardComponent {

public title = input<string>();
public description = input<string>();
public image = input<string>();


}