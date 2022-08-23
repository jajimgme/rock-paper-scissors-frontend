import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameMainComponent } from './game-main.component';

const routes: Routes = [
  { path: '', component: GameMainComponent },
  {
    path: 'game-board',
    loadChildren: () =>
      import('./game-board/game-board.module').then((m) => m.GameBoardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameMainRoutingModule {}
