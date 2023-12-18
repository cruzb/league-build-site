import { Component, Input, OnInit } from '@angular/core';
import { Champion, IChampSpell, IChampStats } from '../../champion.model';
import { RiotService } from 'src/app/core/services/riot.service';


@Component({
    selector: 'app-champion-profile-stats',
    templateUrl: 'stats.component.html',
    styleUrls: ['stats.component.scss']
})
export class StatsComponent implements OnInit {

    @Input()
    public stats?: IChampStats = undefined;

    public images = {
        attack: 'assets/img/stats/statmodsattackdamageicon.png',
        abilitypower: 'assets/img/stats/statmodsabilitypowericon.png',
        armor: 'assets/img/stats/statmodsarmoricon.png',
        magicresist: 'assets/img/stats/statmodsmagicresicon.png',
        attackspeed: 'assets/img/stats/statmodsattackspeedicon.png',
        abilityhaste: 'assets/img/stats/statmodscdrscalingicon.png',
        crit: 'assets/img/stats/statmodscriticalstrikeicon.webp',
        movespeed: 'assets/img/stats/statmodsmovementspeedicon.png'
    };

    public loading = true;
    public isPassive = false;

    constructor (
        private riot: RiotService
    ) {}

    public ngOnInit() {
        
    }

}
