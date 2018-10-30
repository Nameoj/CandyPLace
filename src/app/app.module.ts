import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { VitrineComponent } from './vitrine/vitrine.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    VitrineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
