import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';
import { RockPaperScissorsService } from 'src/app/core/services/rock-paper-scissors.service';
import { GameDescription } from 'src/app/shared/entities/game-description';
import { ImplementedGames } from 'src/app/shared/entities/implemented-games';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {
  games: GameDescription[] = [];

  constructor(private gameService: GameService, private rockPaperScissorsService: RockPaperScissorsService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(t=> {
      this.games = t;
  })
}

  gameSelected(g: GameDescription){
  if(g.gameType.id === ImplementedGames.ROCK_PAPER_SCISSORS){
    this.rockPaperScissorsService.game_url = g.playingEndpoint;
    this.rockPaperScissorsService.getGameDescription(g.gameType).subscribe(res => console.log(res))
  }
  }

}
