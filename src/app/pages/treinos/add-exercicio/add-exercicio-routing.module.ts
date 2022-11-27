import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExercicioPage } from './add-exercicio.page';

const routes: Routes = [
  {
    path: '',
    component: AddExercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExercicioPageRoutingModule {}
