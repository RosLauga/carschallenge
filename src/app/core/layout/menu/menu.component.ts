import { ChangeDetectionStrategy, Component, EventEmitter, inject, input, Output, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { menuSelector } from './states/menu.selectors';
import { AsyncPipe } from '@angular/common';
import { setTabIndexAction } from '../../../domain/cars/states/globals/globals.actions';

@Component({
  selector: 'app-menu',
  imports: [AsyncPipe, MatButtonModule, MatIconModule],
  templateUrl: `./menu.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Output() toggleMenu = new EventEmitter();
  private readonly store = inject(Store)
    
  public menuList = this.store.select(menuSelector)

  onClick(){
    this.toggleMenu.emit()
  }

  setTabIndex(index: number | null) {
    if(index == null) return
    this.store.dispatch(setTabIndexAction({index}))
  }

 }
