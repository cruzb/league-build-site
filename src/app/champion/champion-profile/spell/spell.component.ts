import { Component, Input, OnInit } from '@angular/core';
import { Champion, IChampSpell } from '../../champion.model';
import { RiotService } from 'src/app/core/services/riot.service';


@Component({
    selector: 'app-champion-profile-spell',
    templateUrl: 'spell.component.html',
    styleUrls: ['spell.component.scss']
})
export class SpellComponent implements OnInit {

    @Input() public key: string = 'P';
    @Input('spell')
    set spell(value: IChampSpell) {
        console.log(value);
        this._spell = value;
        this.isPassive = this.checkPassive(value);
        this.imageUrl = this.isPassive ? RiotService.PASSIVE_IMG_URL : RiotService.SKILL_IMG_URL;
    }

    public _spell?: IChampSpell = undefined;

    public imageUrl = '';

    public loading = true;
    public isPassive = false;
    public hovered = false;

    constructor (
        private riot: RiotService
    ) {}

    public ngOnInit() {
        
    }

    public checkPassive(spell: any) {
        return spell.id === undefined 
    }

    public doLeveltipIndex(index: number) {

    }

    public getStatNameFromLeveltipIndex(index: number): string {
        if(this._spell!.leveltip.effect[index] === undefined) {
            return '';
        }

        let letters = this._spell!.leveltip.effect[index].split('');
        if (!letters) {
            return '';
        }

        if (letters[3] !== 'e') {
            return '';
        }

        let i = parseInt(letters[4]);

        return this._spell!.leveltip.label[index];
    }

    public getIndexFromLeveltipIndex(index: number): number {
        if(this._spell!.leveltip.effect[index] === undefined) {
            return 0;
        }

        let letters = this._spell!.leveltip.effect[index].split('');
        if (!letters) {
            return 0;
        }

        let i = parseInt(letters[letters.findIndex(e => e === 'e') + 1]);
        return i;
    }
}
