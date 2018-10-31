import { Component, OnInit } from '@angular/core';
import { ProfilesService } from './../services/profiles.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  Users;
  varUser = 0;
  constructor(private profilesservices: ProfilesService) {}

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    this.varUser = this.profilesservices.varUser;
  }
}
