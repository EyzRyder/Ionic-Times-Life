import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudePage } from './saude.page';

const routes: Routes = [
  {
    path: '',
    component: SaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudePageRoutingModule {}
