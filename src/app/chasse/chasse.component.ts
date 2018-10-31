import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './../services/profiles.service';

@Component({
  selector: 'app-chasse',
  templateUrl: './chasse.component.html',
  styleUrls: ['./chasse.component.css']
})
export class ChasseComponent implements OnInit {

	Users;
  varUser;

  constructor(private profilesservices: ProfilesService) {}

  ajouter(image,name,quantity,i,j){
    quantity = 1;
    let objet = {image, name, quantity};
    this.profilesservices.Users[this.varUser].collection.push(objet);
    this.profilesservices.Users[i].vitrine[j].quantity --;
  }

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    this.varUser = this.profilesservices.varUser;
  }
}
