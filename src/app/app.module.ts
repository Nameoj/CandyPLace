import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ChasseComponent } from './chasse/chasse.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ChasseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
