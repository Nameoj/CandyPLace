
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfilepageComponent } from "./profilepage/profilepage.component";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CandyLogComponent } from "./candy-log/candy-log.component";
import { BonbonlogService } from "./bonbonlog.service";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { CollectionComponent } from "./collection/collection.component";
import { ChasseComponent } from "./chasse/chasse.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { VitrineComponent } from "./vitrine/vitrine.component";
import { AccueilComponent } from './accueil/accueil.component';



const appRoutes: Routes = [
{path: 'hunt', component: ChasseComponent},
{path: 'collection', component: CollectionComponent},
{path: 'showcase', component: VitrineComponent},
{path: 'candylog', component: CandyLogComponent},
{ path: "profilepage", component: ProfilepageComponent },
{path: '',component: AccueilComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ChasseComponent,
    NavbarComponent,
    VitrineComponent,
    CandyLogComponent,
    AccueilComponent,
    ProfilepageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BonbonlogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
