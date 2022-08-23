import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDescription } from 'src/app/shared/entities/game-description';
import { GamePick } from 'src/app/shared/entities/game-pick';
import { GameResult } from 'src/app/shared/entities/game-result';
import { GameType } from 'src/app/shared/entities/game-type';
import { Play } from 'src/app/shared/entities/play';
import { RockPaperScissorsGameDescription } from 'src/app/shared/entities/rock-paper-scissors-game-description';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RockPaperScissorsService {
  private _game_url = '';
  public set game_url(value: string) {
    this._game_url = value;
  }
  private readonly baseEndpoint;
  constructor(private httpClient: HttpClient) {
    this.baseEndpoint = new URL(this._game_url, environment.backend_url).href;
  }

  public getGameDescription(
    gameType: GameType
  ): Observable<RockPaperScissorsGameDescription> {
    this.checkUrl();
    const params = this.getHttpParams(gameType);
    const endpoint = this.getEndpointUri('getGameDescription');
    return this.httpClient.get(endpoint, {
      params: params,
    }) as Observable<RockPaperScissorsGameDescription>;
  }

  private getEndpointUri(path: string) {
    return new URL(`${this._game_url}${path}`, this.baseEndpoint).href;
  }

  public getAiPick(gameType: GameType): Observable<GamePick> {
    this.checkUrl();
    const params = this.getHttpParams(gameType);
    const endpoint = this.getEndpointUri('getAIPick');
    return this.httpClient.get(endpoint, {
      params: params,
    }) as Observable<GamePick>;
  }

  public play( p:Play):Observable<GameResult>{
    this.checkUrl();
    const endpoint = this.getEndpointUri('play');
    return this.httpClient.post(endpoint, p) as Observable<GameResult>;
  }
  private checkUrl() {
    if (!this._game_url) throw new Error('Game Url Not Provided');
  }

  private getHttpParams(gameType: GameType) {
    return new HttpParams().set('id', gameType.id).set('name', gameType.name);
  }
}
