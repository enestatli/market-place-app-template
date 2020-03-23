import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { FilterComponent } from "src/app/components/filter/filter.component";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.page.html",
  styleUrls: ["./search-results.page.scss"]
})
export class SearchResultsPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  openFilterModal() {
    this.modalCtrl
      .create({
        component: FilterComponent,
        componentProps: {},
        backdropDismiss: false
      })
      .then(modal => modal.present());
  }
}
