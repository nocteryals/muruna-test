import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { StartingComponent } from './starting/starting.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    StartingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
