import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidePageComponent } from './side-page.component';
import { SidePageResolver } from './side-page.resolver';

const routes: Routes = [
  { path: '', component: SidePageComponent, outlet: 'sidePage',resolve: {clients: SidePageResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SidePageRoutingModule { }
