import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allRoutes } from 'src/app/models/common-models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.page.html',
  styleUrls: ['./guide.page.scss'],
})
export class GuidePage implements OnInit {

  constructor(public navCtrl:NavController) { }

  ngOnInit() {
  }

  proceed(){
    this.navCtrl.navigateRoot(allRoutes.tabs);
  }

}
