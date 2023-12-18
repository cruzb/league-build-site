import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorPageComponent } from './editor.page';

const routes: Routes = [
    {
        path: '',
        component: EditorPageComponent, 
        //canActivate: [AuthGuard], 
        data: { 
            pageTitle: 'Build Editor'
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
export class EditorRoutingModule { }