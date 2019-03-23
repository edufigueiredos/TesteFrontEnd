import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ClientListComponent } from './pages/side-page/client-list/client-list.component';
import { ClientInfoComponent } from './pages/side-page/client-info/client-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: MainPageComponent },
  { path: '', component: ClientListComponent, outlet: 'sidePage' },
  { path: 'info', component: ClientInfoComponent, outlet: 'sidePage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
