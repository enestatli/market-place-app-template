import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-membership-selection",
  templateUrl: "./membership-selection.page.html",
  styleUrls: ["./membership-selection.page.scss"]
})
export class MembershipSelectionPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  goClientRegister() {
    this.navCtrl.navigateRoot(allRoutes.settings); //clientRegister
  }

  goMemberRegister() {
    this.navCtrl.navigateRoot(allRoutes.settings); //memberRegister
  }
}
