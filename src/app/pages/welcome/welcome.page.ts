import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"]
})
export class WelcomePage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  goMembershipSelection() {
    this.navCtrl.navigateRoot(allRoutes.membershipSelection);
    console.log("membership-selection");
  }
}
