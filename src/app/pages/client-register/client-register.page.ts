import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-client-register",
  templateUrl: "./client-register.page.html",
  styleUrls: ["./client-register.page.scss"]
})
export class ClientRegisterPage implements OnInit {
  constructor(public NavCtrl: NavController) {}

  ngOnInit() {}

  submitClientRegister() {
    // Submit form and redirect to the feed
  }

  goFeed() {
    this.NavCtrl.navigateRoot(allRoutes.settings); // feed route
  }
}
