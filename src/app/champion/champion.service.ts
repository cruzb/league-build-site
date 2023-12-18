import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, first, map, tap } from 'rxjs';
import { Champion, ChampionBrief } from './champion.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
    //TODO versioning
    private version = '13.12.1';

    constructor(private http: HttpClient) { }

    public getChampion(champId: string): Observable<Champion> {
        const champJsonUrl = `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion/${champId}.json`;
        return this.http.get<Champion>(champJsonUrl).pipe(
            map(res => {
                return (res as any).data[champId];
            })
        )
    }

    public getChampionBrief(champId: string): Observable<ChampionBrief> {
        const champJsonUrl = `http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json`;
        return this.http.get<ChampionBrief>(champJsonUrl).pipe(
            map(res => {
                return (res as any).data[champId];
            })
        )
    }
}
