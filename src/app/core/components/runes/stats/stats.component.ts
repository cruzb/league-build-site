import { Component,  OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { IStatRune, IStatSlot } from '../runes.model';

@Component({
    selector: 'app-component-runes-stats',
    templateUrl: 'stats.component.html',
    styleUrls: ['../runes.component.scss']
})
export class StatsRuneComponent implements OnInit {
    
    public rows: IStatSlot[] = [
        {
            selectedIndex: -1,
            runes: [
                {
                    id: 0,
                    name: 'Adaptive Force',
                    icon: 'assets/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png',
                },
                {
                    id: 1,
                    name: 'Attack Speed',
                    icon: 'assets/img/perk-images/StatMods/StatModsAttackSpeedIcon.png'
                },
                {
                    id: 2,
                    name: 'Ability Haste',
                    icon: 'assets/img/perk-images/StatMods/StatModsCDRScalingIcon.png'
                }
            ]
        },
        {
            selectedIndex: -1,
            runes: [
                {
                    id: 3,
                    name: 'Adaptive Force',
                    icon: 'assets/img/perk-images/StatMods/StatModsAdaptiveForceIcon.png'
                },
                {
                    id: 4,
                    name: 'Armor',
                    icon: 'assets/img/perk-images/StatMods/StatModsArmorIcon.png'
                },
                {
                    id: 5,
                    name: 'Magic Resist',
                    icon: 'assets/img/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png'
                }
            ]
        },
        {
            selectedIndex: -1,
            runes: [
                {
                    id: 6,
                    name: 'Health',
                    icon: 'assets/img/perk-images/StatMods/StatModsHealthScalingIcon.png'
                },
                {
                    id: 7,
                    name: 'Armor',
                    icon: 'assets/img/perk-images/StatMods/StatModsArmorIcon.png'
                },
                {
                    id: 8,
                    name: 'Magic Resist',
                    icon: 'assets/img/perk-images/StatMods/StatModsMagicResIcon.MagicResist_Fix.png'
                }
            ]
        }
    ];

    constructor (
        private activatedRoute: ActivatedRoute, 
        private title: Title
    ) {}

    public ngOnInit() {

    }
}
