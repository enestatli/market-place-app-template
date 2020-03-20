import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoneRegisterPageRoutingModule } from './phone-register-routing.module';

import { PhoneRegisterPage } from './phone-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoneRegisterPageRoutingModule
  ],
  declarations: [PhoneRegisterPage]
})
export class PhoneRegisterPageModule {}
