import { Component, OnInit } from "@angular/core";
import { ProfilesService } from "./../services/profiles.service";

@Component({
  selector: "app-vitrine",
  templateUrl: "./vitrine.component.html",
  styleUrls: ["./vitrine.component.css"]
})
export class VitrineComponent implements OnInit {
  Users;
  varUser;
  constructor(private profilesservices: ProfilesService) {}

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    this.varUser = this.profilesservices.varUser;
  }
}
