import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GamePick } from '../entities/game-pick';

@Component({
  selector: 'app-pick-card',
  templateUrl: './pick-card.component.html',
  styleUrls: ['./pick-card.component.scss'],
})
export class PickCardComponent implements OnInit {
  @Input('gamePick') public gamePick: GamePick | undefined;
  @Output() gamePickSelected = new EventEmitter<GamePick>();
  @Input() public showButton = true;
  

  @Input()
  public set removeHighlight(value:boolean) {
    if (!value) {
      this.removeHighlightClass();
    }
  }
  customClass: string[] = ['card'];
  constructor() {}

  ngOnInit(): void {}

  cardClicked() {
    console.log(this.gamePick);
    this.gamePickSelected.emit(this.gamePick);
    this.addHighlightClass();
  }
  private addHighlightClass() {
    if (this.customClass.find((e) => e === 'border-primary')) return;
    this.customClass.push('border-primary');
  }
  private removeHighlightClass() {
    if (this.customClass.find((e) => e === 'border-primary')) {
      this.customClass.pop();
    }
  }
}
