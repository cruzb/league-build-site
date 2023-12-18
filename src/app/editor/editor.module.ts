import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../core/components/components.module';
import { EditorPageComponent } from './editor.page';
import { EditorRoutingModule } from './editor-routing.module';


@NgModule({
  declarations: [
    EditorPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
