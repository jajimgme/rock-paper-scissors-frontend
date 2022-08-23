import { GameResultType } from "./game-result-type";
import { Player } from "./player";

export class GameResult {
    gameResultType: GameResultType | undefined = undefined;
    winner: Player | undefined = undefined;

}

