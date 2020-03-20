import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberRegisterPage } from './member-register.page';

const routes: Routes = [
  {
    path: '',
    component: MemberRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRegisterPageRoutingModule {}
