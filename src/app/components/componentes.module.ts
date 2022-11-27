import { TelaDeDescansoComponent } from './tela-de-descanso/tela-de-descanso.component';
import { FinalTreinoComponent } from './final-treino/final-treino.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [ FinalTreinoComponent, TelaDeDescansoComponent],
    declarations: [ FinalTreinoComponent, TelaDeDescansoComponent]
})
export class ComponentsModule { }
