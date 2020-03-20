import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MemberRegisterTypePageRoutingModule } from "./member-register-type-routing.module";

import { MemberRegisterTypePage } from "./member-register-type.page";
import { ComponentsModule } from "src/app/components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MemberRegisterTypePageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MemberRegisterTypePage]
})
export class MemberRegisterTypePageModule {}
