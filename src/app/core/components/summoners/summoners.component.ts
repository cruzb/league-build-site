import { Component,  OnInit } from '@angular/core';
import { ComponentsService } from '../components.service';

import { RiotService } from '../../services/riot.service';

@Component({
    selector: 'app-component-summoners',
    templateUrl: 'summoners.component.html',
    styleUrls: ['summoners.component.scss']
})
export class SummonersComponent implements OnInit {
    
    public summBaseUrl: string = RiotService.SUMMONER_IMG_URL;

    constructor (
        private componentsService: ComponentsService
    ) {}

    public ngOnInit() {

    }


}
