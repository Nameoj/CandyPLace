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

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    this.varUser = this.profilesservices.varUser;
  }
}
