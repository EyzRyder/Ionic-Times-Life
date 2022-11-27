import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTreinoPage } from './add-treino.page';

const routes: Routes = [
  {
    path: '',
    component: AddTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTreinoPageRoutingModule {}
