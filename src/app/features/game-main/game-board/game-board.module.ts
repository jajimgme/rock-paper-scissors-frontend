import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBoardRoutingModule } from './game-board-routing.module';
import { GameBoardComponent } from './game-board.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [GameBoardComponent],
  imports: [CommonModule, GameBoardRoutingModule, SharedModule],
})
export class GameBoardModule {}
