import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './common/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";

import { TheGUIDEComponent } from './components/the-guide/the-guide.component';
import { MALGUDIDAYSComponent } from './components/malgudi-days/malgudi-days.component';
import { UNTOUCHABLEComponent } from './components/untouchable/untouchable.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TheGUIDEComponent,
    MALGUDIDAYSComponent,
    UNTOUCHABLEComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatIconModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
