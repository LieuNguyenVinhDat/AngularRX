import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './reducts/counter.reducer';
import { ButonComponent } from './Component/buton/buton.component';
import {CalculatorReducer } from './reducts/calculator.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ButonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, calcultor: CalculatorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
