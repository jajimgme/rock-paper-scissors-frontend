import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private readonly game_url = '/game';
  private baseEndpoint;
  constructor(private httpClient: HttpClient) { 
    this.baseEndpoint = new URL(this.game_url, environment.backend_url).href;
  }

  public getGames(): Observable<any>{
    return this.httpClient.get(this.baseEndpoint)
  }
 
}
