import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameMainRoutingModule } from './game-main-routing.module';
import { GameMainComponent } from './game-main.component';


@NgModule({
  declarations: [
    GameMainComponent
  ],
  imports: [
    CommonModule,
    GameMainRoutingModule
  ]
})
export class GameMainModule { }
