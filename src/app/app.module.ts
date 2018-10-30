import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { CandyLogComponent } from './candy-log/candy-log.component';
import { BonbonlogService } from './bonbonlog.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    CandyLogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    BonbonlogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
