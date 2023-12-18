import { Component,  Input,  OnInit } from '@angular/core';
import { Item } from '../items.model';
import { ItemBuild } from './item-build.model';


@Component({
    selector: 'app-component-items-item-build',
    templateUrl: 'item-build.component.html',
    styleUrls: ['item-build.component.scss']
})
export class ItemBuildComponent implements OnInit {

    @Input()
    public items: Item[] = [];

    @Input() 
    public title: string = '';

    constructor (
    ) {}
    
    public ngOnInit(): void {

    }
}
