import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/core/services/game.service';
import { GameDescription } from 'src/app/shared/entities/game-description';

@Component({
  selector: 'app-game-main',
  templateUrl: './game-main.component.html',
  styleUrls: ['./game-main.component.scss']
})
export class GameMainComponent implements OnInit {
  games: GameDescription[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe(t=> {
      this.games = t
      console.log(this.games[0].descriptionOfTheRules)})
  }

}
