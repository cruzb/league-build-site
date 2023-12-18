import { Component, OnInit } from '@angular/core';
import { ChampionService } from './champion.service';
import { Champion } from './champion.model';
import { ActivatedRoute } from '@angular/router';
import { ComponentsService } from '../core/components/components.service';
import { IItemResponse } from '../core/components/items/items.model';

@Component({
    selector: 'app-champion',
    templateUrl: 'champion.page.html',
    styleUrls: ['champion.page.scss']
})
export class ChampionPageComponent implements OnInit {

    public champ?: Champion = undefined;
    public champId: string = '';

    public summoner1: {
        name: string,
        image: string
    } = { name: '', image: ''}
    public summoner2: {
        name: string,
        image: string
    } = { name: '', image: ''}

    public buildItems: {
        startingItems: any[],
        boots: any[],
        items: any[],
        coreItems: any[]
    } = {
        startingItems: [],
        boots: [],
        items: [],
        coreItems: []
    }

    constructor (
        private route: ActivatedRoute,
        private championService: ChampionService,
        private componentsService: ComponentsService
    ) {}

    public ngOnInit() {
        this.champId = this.route.snapshot.params['champId'];
        this.championService.getChampion(this.champId).subscribe({
            next: (champ) => {
                this.champ = champ;

            }
        });
        this.getAllItems()
    }

    private getAllItems() {
        this.componentsService.getAllItems().subscribe({
            next: (res: IItemResponse) => {
                let items: any[] = [];

                for (const [key, value] of Object.entries(res.data)) {
                    if (!(value as any).gold.purchasable) {
                        continue;
                    }

                    items.push({
                        id: parseInt(key, 10),
                        name: (value as any).name,
                        description: (value as any).description,
                        colloq: (value as any).colloq,
                        plaintext: (value as any).plaintext,
                        into: (value as any).into,
                        image: (value as any).image,
                        gold: (value as any).gold,
                        tags: (value as any).tags,
                        maps: (value as any).maps,
                        stats: (value as any).stats
                    });
                }

                this.buildItems = {
                    startingItems: [items[1], items[55]],
                    boots: [items[0]],
                    items: [items[5], items[4], items[3], items[10], items[100]],
                    coreItems: [items[21], items[33], items[44]]
                }

                console.log(this.buildItems)
            },
            error: (err) => {console.log(err);}
        });
    }
}
