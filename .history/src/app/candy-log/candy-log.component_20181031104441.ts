import { Component, OnInit } from "@angular/core";
import { BonbonlogService } from "../bonbonlog.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProfilesService } from "./../services/profiles.service";

@Component({
  selector: "app-candy-log",
  templateUrl: "./candy-log.component.html",
  styleUrls: ["./candy-log.component.css"]
})
export class CandyLogComponent implements OnInit {
  objectBonbon: object[];
  affichage: boolean = false;
  Users;

  constructor(
    private service: BonbonlogService,
    private profilesservices: ProfilesService
  ) {}

  apiBonbec() {
    this.service.apiCall().subscribe((data: any) => {
      this.objectBonbon = data;
      this.affichage = true;
      console.log(this.objectBonbon);
    });
  }

  ngOnInit() {
    this.apiBonbec();
    this.Users = this.profilesservices.Users;
  }

  grisageCandyLog(){
    if (this.Users.name == this.objectBonbon.product_name_fr){

    }
  }
  


}
