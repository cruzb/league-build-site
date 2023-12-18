import { Component,  Input,  OnInit } from '@angular/core';
import { Item } from '../items.model';


@Component({
    selector: 'app-component-items-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.scss']
})
export class ItemComponent implements OnInit {

    public itemImageBaseUrl: string = 'http://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/';

    @Input()
    public item: Item = new Item;

    constructor (
    ) {}
    
    public ngOnInit(): void {

    }
}
