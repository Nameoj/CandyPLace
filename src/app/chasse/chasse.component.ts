import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './../services/profiles.service';

@Component({
  selector: 'app-chasse',
  templateUrl: './chasse.component.html',
  styleUrls: ['./chasse.component.css']
})
export class ChasseComponent implements OnInit {

	Users;
  varUser = 0;

  constructor(private profilesservices: ProfilesService) {}

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    console.log(this.Users);
  }
}
