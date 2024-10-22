import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneConfirmationComponent } from "./phone-confirmation/phone-confirmation.component";
import { FooterMessageComponent } from "./footer-message/footer-message.component";
import { FilterComponent } from "./filter/filter.component";

const components = [
  PhoneConfirmationComponent,
  FooterMessageComponent,
  FilterComponent
];

@NgModule({
  declarations: [...components],
  entryComponents: [...components],
  imports: [CommonModule],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
