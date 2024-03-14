import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTING, CORE_ROUTING } from '@muruna-app/shared';

const routes: Routes = [
  {
    path: CORE_ROUTING.DEFAULT,
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: APP_ROUTING.DEFAULT,
    redirectTo: CORE_ROUTING.DEFAULT + '/' + CORE_ROUTING.STARTING,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTING.EXCEPTION,
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
