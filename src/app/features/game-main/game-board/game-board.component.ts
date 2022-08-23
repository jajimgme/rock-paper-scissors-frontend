import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RockPaperScissorsService } from 'src/app/core/services/rock-paper-scissors.service';
import { GameDescription } from 'src/app/shared/entities/game-description';
import { GamePick } from 'src/app/shared/entities/game-pick';
import { Pick } from 'src/app/shared/entities/pick';
import { Play } from 'src/app/shared/entities/play';
import { Player } from 'src/app/shared/entities/player';
import { PlayerType } from 'src/app/shared/entities/player-type';
import { RockPaperScissorsGameDescription } from 'src/app/shared/entities/rock-paper-scissors-game-description';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  selectedGame: RockPaperScissorsGameDescription | undefined;
  humanPlayer: Player = new Player();
  robotPlayer: Player = new Player();
  constructor(
    private router: Router,
    private gameService: RockPaperScissorsService
  ) {
    let extra = router.getCurrentNavigation()?.extras;
    if (extra && extra.state) this.selectedGame = extra.state['selectedGame'];
    this.createPlayers();
  }

  ngOnInit(): void {
    console.log(this.selectedGame);
  }

  private createPlayers() {
    let player = new Player();
    player.name = 'DefaultPlayer';
    player.playerType = PlayerType.HUMAN;

    this.humanPlayer = player;

    let player2 = new Player();
    player2.name = 'Robot';
    player2.playerType = PlayerType.MACHINE;

    this.robotPlayer = player2;
  }

  selectedPick(pick: GamePick) {
    const humanPick = this.createPick(pick, this.humanPlayer);
    if (this.selectedGame)
      this.gameService
        .getAiPick(this.selectedGame?.gameType)
        .subscribe((machinePick) =>{
        console.log(machinePick);
          this.gameService.play(
            this.createPlay(
              humanPick,
              this.createPick(machinePick, this.robotPlayer)
            )
          ).subscribe(gameResult => console.log);
        }
        );
  }

  private createPick(g: GamePick, p: Player): Pick {
    let pick = new Pick();
    pick.pick = g;
    pick.player = p;
    return pick;
  }
  private createPlay(humanPick: Pick, machinePick: Pick): Play {
    const play = new Play();
    play.picks = [humanPick, machinePick];
    return play;
  }
}
