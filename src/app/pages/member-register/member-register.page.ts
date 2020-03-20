import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-member-register",
  templateUrl: "./member-register.page.html",
  styleUrls: ["./member-register.page.scss"]
})
export class MemberRegisterPage implements OnInit {
  constructor(public NavCtrl: NavController) {}

  ngOnInit() {}

  submitMemberRegister() {
    // Submit form and redirect to the feed
  }

  goFeed() {
    this.NavCtrl.navigateRoot(allRoutes.feed); // feed route
  }
}
