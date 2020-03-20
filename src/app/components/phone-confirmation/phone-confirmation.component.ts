import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { allRoutes } from "src/app/models/common-models";

@Component({
  selector: "app-phone-confirmation",
  templateUrl: "./phone-confirmation.component.html",
  styleUrls: ["./phone-confirmation.component.scss"]
})
export class PhoneConfirmationComponent implements OnInit {
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  verify() {
    this.modalCtrl.dismiss().then(() => {
      this.goMemberRegister();
    });
  }
  goMemberRegister() {
    this.navCtrl.navigateRoot(allRoutes.memberRegister);
  }
}
