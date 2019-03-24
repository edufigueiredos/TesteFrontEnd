import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { ClientsModule } from './components/clients/clients.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';
import { SidePageComponent } from './pages/side-page/side-page.component';
import { SidePageModule } from './pages/side-page/side-page.module';
import { FilterByName } from './shared/pipes/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ClientListComponent,
    SidePageComponent,
    FilterByName
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientsModule,
    SidePageModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
