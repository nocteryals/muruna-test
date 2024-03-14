import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartingComponent } from './starting/starting.component';
import { MainComponent } from './main/main.component';
import { CORE_ROUTING } from '@muruna-app/shared';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: CORE_ROUTING.STARTING,
        component: StartingComponent,
      },
      {
        path: CORE_ROUTING.MAIN_PAGE,
        component: MainComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
