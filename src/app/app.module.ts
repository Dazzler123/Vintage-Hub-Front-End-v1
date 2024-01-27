import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {MainHeaderComponent} from "./core/main-header/main-header.component";
import {MainFooterComponent} from "./core/main-footer/main-footer.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from "@angular/material/radio";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MainHeaderComponent,
    MainFooterComponent,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [
    provideClientHydration(),
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'black' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
