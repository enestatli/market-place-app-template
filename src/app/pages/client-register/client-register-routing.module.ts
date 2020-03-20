import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientRegisterPage } from './client-register.page';

const routes: Routes = [
  {
    path: '',
    component: ClientRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRegisterPageRoutingModule {}
