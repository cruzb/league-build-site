import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunesComponent } from './runes/runes.component';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { StatsRuneComponent } from './runes/stats/stats.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { ItemBuildComponent } from './items/item-build/item-build.component';
import { SummonersComponent } from './summoners/summoners.component';

@NgModule({
    declarations: [
        ItemComponent,
        ItemBuildComponent,
        ItemsComponent,
        RunesComponent,
        StatsRuneComponent,
        SummonersComponent
    ],
    imports: [
        CommonModule,
        NgbCollapseModule,
        NgbTooltipModule
    ],
    exports: [
        ItemBuildComponent,
        ItemsComponent,
        RunesComponent,
        SummonersComponent
    ]
})
export class ComponentsModule { }
