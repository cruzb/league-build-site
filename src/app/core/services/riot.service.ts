import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiotService {
    //TODO versioning
    private version = '13.12.1';

    constructor(private http: HttpClient) { }

    public static readonly CHAMPION_IMG_URL = 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/champion/';
    public static readonly SKILL_IMG_URL = 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/spell/';
    public static readonly PASSIVE_IMG_URL = 'https://ddragon.leagueoflegends.com/cdn/13.6.1/img/passive/';
    public static readonly RUNE_IMG_URL = 'assets/img/';
    public static readonly ITEM_IMG_URL = 'http://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/';
    public static readonly SUMMONER_IMG_URL = 'assets/img/summoners/';
}
