import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExercicioPageRoutingModule } from './add-exercicio-routing.module';

import { AddExercicioPage } from './add-exercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExercicioPageRoutingModule
  ],
  declarations: [AddExercicioPage]
})
export class AddExercicioPageModule {}
