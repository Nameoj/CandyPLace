import { Component, OnInit } from "@angular/core";
import { ProfilesService } from "./../services/profiles.service";

@Component({
  selector: "app-vitrine",
  templateUrl: "./vitrine.component.html",
  styleUrls: ["./vitrine.component.css"]
})
export class VitrineComponent implements OnInit {
  Users;
  varUser = 0;
  constructor(private profilesservices: ProfilesService) {}

  ngOnInit() {
    this.Users = this.profilesservices.Users;
    console.log(this.Users);
  }
}
