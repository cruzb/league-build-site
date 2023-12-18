import { Component,  OnInit } from '@angular/core';

import { ComponentsService } from '../components.service';
import { IRuneTree, ISelectedRuneTree } from './runes.model';
import { RiotService } from '../../services/riot.service';

@Component({
    selector: 'app-component-runes',
    templateUrl: 'runes.component.html',
    styleUrls: ['runes.component.scss']
})
export class RunesComponent implements OnInit {
    
    public runeTrees: IRuneTree[] = [];
    public selectedTrees: ISelectedRuneTree[] = [];

    public runeBaseUrl: string = RiotService.RUNE_IMG_URL;

    constructor (
        private componentsService: ComponentsService
    ) {}

    public ngOnInit() {
        this.getAllRunes();
    }

    public switchTree(index: number, id: number) {
        let switchToTree = this.runeTrees.find(e => e.id === id);
        if (switchToTree === undefined) {
            return;
        }

        this.selectedTrees[index] = {...switchToTree, expanded: false};
    }

    public getClasses(treeIndex: number) {
        let classes = '';

        switch(this.selectedTrees[treeIndex].name.toLowerCase()) {
            case 'domination': 
                classes += 'red';
                break;
            case 'resolve': 
                classes += 'green';
                break;
            case 'precision': 
                classes += 'yellow';
                break;
            case 'sorcery': 
                classes += 'purple';
                break;
            case 'inspiration': 
                classes += 'blue';
                break;
        }

        return classes;
    }

    private getAllRunes() {
        this.componentsService.getAllRunes().subscribe({
            next: (res) => {
                this.runeTrees = res;

                for (let tree of this.runeTrees) {
                    for (let slot of tree.slots) {
                        slot.selectedIndex = -1;
                    }
                }

                this.selectedTrees.push({
                    ...this.runeTrees[0],
                    expanded: false
                });
                this.selectedTrees.push({
                    ...this.runeTrees[1],
                    expanded: false
                });
            },
            error: (err) => {console.log(err);}
        });
    }
}
