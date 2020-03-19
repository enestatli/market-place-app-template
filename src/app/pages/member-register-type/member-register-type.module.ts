import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberRegisterTypePageRoutingModule } from './member-register-type-routing.module';

import { MemberRegisterTypePage } from './member-register-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberRegisterTypePageRoutingModule
  ],
  declarations: [MemberRegisterTypePage]
})
export class MemberRegisterTypePageModule {}
