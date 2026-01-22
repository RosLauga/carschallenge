import { Component, input } from "@angular/core";

export interface Button {
    title: string;
    color?: string;
}


@Component({
selector: "app-button",
templateUrl: "./button.component.html",
styleUrl: "./button.component.css",
host: {
    class: 'h-full'
  },
})
export class ButtonComponent {

    public title = input<string>("")

}