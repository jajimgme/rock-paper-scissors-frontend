import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameMainRoutingModule } from './game-main-routing.module';
import { GameMainComponent } from './game-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GameMainComponent],
  imports: [CommonModule, GameMainRoutingModule, NgbModule],
})
export class GameMainModule {}
