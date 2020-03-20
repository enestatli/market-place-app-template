import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneRegisterPage } from './phone-register.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoneRegisterPageRoutingModule {}
