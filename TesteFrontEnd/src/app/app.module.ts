import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ClientListComponent } from './components/clients/client-list/client-list.component';
import { SidePageComponent } from './pages/side-page/side-page.component';
import { ClientInfoComponent } from './components/clients/client-info/client-info.component';
import { SidePageModule } from './pages/side-page/side-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { DataFormsModule } from './components/data-forms/data-forms.module';
import { FilterByName } from './shared/pipes/filter-by-name.pipe';
import { CpfPipe } from './shared/pipes/cpf.pipe';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabase } from './in-memory-database';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ClientListComponent,
    ClientInfoComponent,
    SidePageComponent,
    FilterByName,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SidePageModule,
    MainPageModule,
    DataFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
