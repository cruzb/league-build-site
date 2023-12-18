import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionPageComponent } from './champion.page';

const routes: Routes = [
    {
        path: ':champId',
        component: ChampionPageComponent, 
        //canActivate: [AuthGuard], 
        data: { 
            pageTitle: 'Champion'
        }
    },
    { 
        path: '**', 
        redirectTo: '/Home', 
        data: {
            pageTitle: 'Home',
        } 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChampionRoutingModule { }