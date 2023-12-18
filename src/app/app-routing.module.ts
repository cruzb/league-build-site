import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: 'Home', component: HomePageComponent, data: { pageTitle: 'Home' } },
  { path: 'Champion', loadChildren: () => import('./champion/champion.module').then(m => m.ChampionModule) },
  { path: 'Editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule) },
  { 
    path: '**', 
    redirectTo: '/Home', 
    data: {
      pageTitle: 'Home',
    } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
