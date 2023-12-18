import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRuneTree } from './runes/runes.model';
import { IItemResponse } from './items/items.model';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
    //TODO versioning
    private version = '13.12.1';

    constructor(private http: HttpClient) { }

    public getAllRunes(): Observable<IRuneTree[]> {
        return this.http.get<IRuneTree[]>(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/runesReforged.json`);
    }

    public getAllItems(): Observable<IItemResponse> {
        return this.http.get<IItemResponse>(`http://ddragon.leagueoflegends.com/cdn/${this.version}/data/en_US/item.json`);
    }

   /* public getAllSummoners(): Observable<> {
        return this.http.get<>(``)
    }*/
}
