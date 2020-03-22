import { Component, ViewChild, OnInit } from "@angular/core";
import { allRoutes } from "src/app/models/common-models";
import { IonTabs } from "@ionic/angular";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"]
})
export class TabsPage implements OnInit {
  tabs = [
    {
      route: allRoutes.feed,
      title: "Anasayfa",
      icon: "home"
    },
    {
      route: allRoutes.favorites,
      title: "Favoriler",
      icon: "heart"
    },
    {
      route: allRoutes.profile,
      title: "Profil",
      icon: "person"
    }
  ];
  @ViewChild("appTabs", { static: true }) appTabs: IonTabs;
  constructor() {}
  ionViewDidEnter() {
    this.appTabs.select(allRoutes.feed);
  }
  ngOnInit() {}
}
