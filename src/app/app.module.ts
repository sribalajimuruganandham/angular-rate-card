import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PortTravellerComponent } from './port-traveller/port-traveller.component';
import { AmountComponent } from './amount/amount.component';
import { LinerComponent } from './liner/liner.component';
import { MetaComponent } from './meta/meta.component';

@NgModule({
  declarations: [
    AppComponent,
    PortTravellerComponent,
    AmountComponent,
    LinerComponent,
    MetaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
