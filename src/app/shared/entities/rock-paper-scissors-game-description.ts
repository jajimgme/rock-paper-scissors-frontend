import { GameDescription } from "./game-description";
import { GamePick } from "./game-pick";


export class RockPaperScissorsGameDescription extends GameDescription {
    availablePicks: GamePick[] = [];
}
