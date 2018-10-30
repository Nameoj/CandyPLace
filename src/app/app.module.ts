import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
<<<<<<< HEAD
import { ChasseComponent } from './chasse/chasse.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
{path: 'hunt', component: ChasseComponent},
{path: 'collection', component: CollectionComponent},
{ path: '',
    redirectTo: '/collection',
    pathMatch: 'full'
  }
];
=======
import { VitrineComponent } from './vitrine/vitrine.component';
>>>>>>> 0f3fce4155e411e717689ab74a1a4c2bc3a5b12a

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
<<<<<<< HEAD
    ChasseComponent,
    NavbarComponent
=======
    VitrineComponent
>>>>>>> 0f3fce4155e411e717689ab74a1a4c2bc3a5b12a
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
