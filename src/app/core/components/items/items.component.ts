import { Component,  OnInit } from '@angular/core';

import { ComponentsService } from '../components.service';
import { IItemResponse, Item } from './items.model';
import { ItemBuild } from './item-build/item-build.model';
import { RiotService } from '../../services/riot.service';


@Component({
    selector: 'app-component-items',
    templateUrl: 'items.component.html',
    styleUrls: ['items.component.scss']
})
export class ItemsComponent implements OnInit {

    public itemImageBaseUrl: string = RiotService.ITEM_IMG_URL;

    public items: Item[] = [];
    public buildItems: ItemBuild = new ItemBuild;

    constructor (
        private componentsService: ComponentsService,
    ) {}

    public ngOnInit() {
        this.getAllItems();
    }

    private getAllItems() {
        this.componentsService.getAllItems().subscribe({
            next: (res: IItemResponse) => {
                for (const [key, value] of Object.entries(res.data)) {
                    if (!(value as any).gold.purchasable) {
                        continue;
                    }

                    this.items.push({
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
                    startingItems: [this.items[1], this.items[55]],
                    boots: this.items[0],
                    items: [this.items[5], this.items[6], this.items[4], this.items[3], this.items[10], this.items[100]],
                    coreItems: [this.items[21], this.items[33], this.items[44]]
                }
            },
            error: (err) => {console.log(err);}
        });
    }
}
