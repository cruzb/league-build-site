import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ChampionPageComponent } from './champion.page';
import { ChampionRoutingModule } from './champion-routing.module';
import { ChampionService } from './champion.service';
import { ChampionProfileComponent } from './champion-profile/champion-profile.component';
import { SpellComponent } from './champion-profile/spell/spell.component';
import { RiotService } from '../core/services/riot.service';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsModule } from '../core/components/components.module';
import { StatsComponent } from './champion-profile/stats/stats.component';

@NgModule({
    declarations: [
        ChampionPageComponent,
        ChampionProfileComponent,
        SpellComponent,
        StatsComponent
    ],
    imports: [
        ChampionRoutingModule,
        CommonModule,
        ComponentsModule,
        NgbTooltipModule
    ],
    exports: [
    ],
    providers: [
        ChampionService,
        RiotService
    ]
})
export class ChampionModule { }
