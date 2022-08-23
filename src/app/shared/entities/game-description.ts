import { GameType } from './game-type';

export class GameDescription {
  numnumberOfPlayers: number = 0;
  descriptionOfTheRules = '';
  gameType: GameType = new GameType();
  playingEndpoint = '';
}
