import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickCardComponent } from './pick-card/pick-card.component';



@NgModule({
  declarations: [
    PickCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PickCardComponent]
})
export class SharedModule { }
