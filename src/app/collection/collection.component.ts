import { ProfilesService } from './../services/profiles.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  // @Input()
  // Users;
  Users;
  varUser;
  constructor(private profilesservices: ProfilesService) {}

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    this.varUser = this.profilesservices.varUser;
  }
}
