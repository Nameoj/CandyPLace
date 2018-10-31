import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './../services/profiles.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private profilesservices: ProfilesService) { }

  changer0(){
  	this.profilesservices.varUser = 0;
  }
  changer1(){
  	this.profilesservices.varUser = 1;
  }
  changer2(){
  	this.profilesservices.varUser = 2;
  }
  changer3(){
  	this.profilesservices.varUser = 3;
  }
  changer4(){
  	this.profilesservices.varUser = 4;
  }
  changer5(){
  	this.profilesservices.varUser = 5;
  }
  changer6(){
  	this.profilesservices.varUser = 6;
  }

  ngOnInit() {
  }

}
