import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ClientListComponent } from './pages/side-page/client-list/client-list.component';
import { ClientInfoComponent } from './pages/side-page/client-info/client-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ClientListComponent,
    ClientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
