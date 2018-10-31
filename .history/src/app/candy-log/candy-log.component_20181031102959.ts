import { Component, OnInit } from '@angular/core';
import { BonbonlogService } from '../bonbonlog.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-candy-log',
  templateUrl: './candy-log.component.html',
  styleUrls: ['./candy-log.component.css']
})
export class CandyLogComponent implements OnInit {

  objectBonbon: object[];
  affichage: boolean = false;

  constructor(
    private service: BonbonlogService,
    private service2: ProfilesService
  ) { }

  apiBonbec() {
    this.service.apiCall().subscribe((data: any) => {
      this.objectBonbon = data;
      this.affichage = true;
      console.log(this.objectBonbon);
    })
  }
  

  ngOnInit() { 
    this.apiBonbec()
  }


}
