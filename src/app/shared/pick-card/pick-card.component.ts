import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamePick } from '../entities/game-pick';

@Component({
  selector: 'app-pick-card',
  templateUrl: './pick-card.component.html',
  styleUrls: ['./pick-card.component.scss']
})
export class PickCardComponent implements OnInit {
  @Input("gamePick") public gamePick: GamePick | undefined  ;
  @Output() gamePickSelected = new EventEmitter<GamePick>();
  constructor() { }

  ngOnInit(): void {
  }

  cardClicked(){
    console.log(this.gamePick)
    this.gamePickSelected.emit(this.gamePick);
  }

}
