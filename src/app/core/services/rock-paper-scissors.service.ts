import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDescription } from 'src/app/shared/entities/game-description';
import { GameType } from 'src/app/shared/entities/game-type';
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

  public getGameDescription(gameType: GameType): Observable<RockPaperScissorsGameDescription> {
    if (!this._game_url) throw new Error('Game Url Not Provided');
    let params = new HttpParams()
      .set('id', gameType.id)
      .set('name', gameType.name);
    const endpoint = new URL(`${this._game_url}getGameDescription`, this.baseEndpoint).href;
    return this.httpClient.get(endpoint, { params: params }) as Observable<any>;
  }
}
