import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhoneConfirmationComponent } from "./phone-confirmation/phone-confirmation.component";
import { MembershipFooterComponent } from "./membership-footer/membership-footer.component";

const components = [PhoneConfirmationComponent, MembershipFooterComponent];

@NgModule({
  declarations: [...components],
  entryComponents: [...components],
  imports: [CommonModule],
  exports: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
