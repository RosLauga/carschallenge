import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { NavBarComponent } from '../../core/layout/nav-bar/nav-bar.component';
import { MainComponent } from "../../core/layout/main/main.component";
import { HttpAxiosServices } from '../../core/services/http.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [NavBarComponent, MainComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    constructor(private readonly httpService: HttpAxiosServices){}

    public getCars: any = []

    ngOnInit(): void {
        this.getCars = this.httpService.requestUrl("https://challenge.egodesign.dev/api/models/")  
    }
}