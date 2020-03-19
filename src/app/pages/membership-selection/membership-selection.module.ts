import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembershipSelectionPageRoutingModule } from './membership-selection-routing.module';

import { MembershipSelectionPage } from './membership-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembershipSelectionPageRoutingModule
  ],
  declarations: [MembershipSelectionPage]
})
export class MembershipSelectionPageModule {}
