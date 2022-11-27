import { TelaDeDescansoComponent } from './tela-de-descanso/tela-de-descanso.component';
import { FinalTreinoComponent } from './final-treino/final-treino.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercicoComponent } from './exercico/exercico.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [ExercicoComponent, FinalTreinoComponent, TelaDeDescansoComponent],
    declarations: [ExercicoComponent, FinalTreinoComponent, TelaDeDescansoComponent]
})
export class ComponentsModule { }
