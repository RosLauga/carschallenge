import { Component, input } from "@angular/core";

export interface Button {
    title: string;
    color?: string;
}


@Component({
selector: "app-button",
templateUrl: "./nav-button.component.html",
host: {
    class: 'h-full'
  },
})
export class NavButtonComponent {

    public title = input<string>("")

}