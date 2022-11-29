import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboradPageRoutingModule } from './dashborad-routing.module';

import { DashboradPage } from './dashborad.page';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { Health } from '@awesome-cordova-plugins/health/ngx';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DashboradPageRoutingModule],
  declarations: [DashboradPage],
})
export class DashboradPageModule {}
