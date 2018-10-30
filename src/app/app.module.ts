import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ChasseComponent } from './chasse/chasse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VitrineComponent } from './vitrine/vitrine.component';

const appRoutes: Routes = [
{path: 'hunt', component: ChasseComponent},
{path: 'collection', component: CollectionComponent},
{path: 'showcase', component: VitrineComponent},
{ path: '',
    redirectTo: '/collection',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ChasseComponent,
    NavbarComponent,
    VitrineComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
