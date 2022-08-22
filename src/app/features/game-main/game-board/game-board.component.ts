import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDescription } from 'src/app/shared/entities/game-description';
import { RockPaperScissorsGameDescription } from 'src/app/shared/entities/rock-paper-scissors-game-description';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  selectedGame: RockPaperScissorsGameDescription | undefined;;

  constructor(private router: Router) { 
    let extra = router.getCurrentNavigation()?.extras;
    if(extra && extra.state)
      this.selectedGame = extra.state['selectedGame'];
  }

  ngOnInit(): void {
    console.log(this.selectedGame)
  }

}
