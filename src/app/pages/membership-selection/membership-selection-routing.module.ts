import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembershipSelectionPage } from './membership-selection.page';

const routes: Routes = [
  {
    path: '',
    component: MembershipSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembershipSelectionPageRoutingModule {}
