import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboradPageRoutingModule } from './dashborad-routing.module';

import { DashboradPage } from './dashborad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboradPageRoutingModule
  ],
  declarations: [DashboradPage]
})
export class DashboradPageModule {}
