import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberRegisterTypePage } from './member-register-type.page';

const routes: Routes = [
  {
    path: '',
    component: MemberRegisterTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRegisterTypePageRoutingModule {}
