import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PhoneConfirmationComponent } from "src/app/components/phone-confirmation/phone-confirmation.component";

@Component({
  selector: "app-phone-register",
  templateUrl: "./phone-register.page.html",
  styleUrls: ["./phone-register.page.scss"]
})
export class PhoneRegisterPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  openConfirmationModal() {
    this.modalCtrl
      .create({
        component: PhoneConfirmationComponent,
        componentProps: {},
        backdropDismiss: false
      })
      .then(modal => modal.present());
  }
}
