import { Component, Input, OnInit } from '@angular/core';
import { Champion } from '../champion.model';
import { RiotService } from 'src/app/core/services/riot.service';

@Component({
    selector: 'app-champion-profile',
    templateUrl: 'champion-profile.component.html',
    styleUrls: ['champion-profile.component.scss']
})
export class ChampionProfileComponent implements OnInit {

    @Input('champion')
    public champ?: Champion = undefined;

    public imageUrl = '';
    public keys = ['Q', 'W', 'E', 'R'];

    public loading = true;

    constructor (
        private riot: RiotService
    ) {}

    public ngOnInit() {
        this.imageUrl = RiotService.CHAMPION_IMG_URL;
    }
}
