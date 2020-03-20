import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-member-register-type",
  templateUrl: "./member-register-type.page.html",
  styleUrls: ["./member-register-type.page.scss"]
})
export class MemberRegisterTypePage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}

  goPhoneRegister() {
    this.navCtrl.navigateRoot(allRoutes.phoneRegister); //MemberRegisterPhoneInput
  }
}
