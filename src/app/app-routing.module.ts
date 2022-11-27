import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'treino',
    loadChildren: () => import('./pages/treinos/treino/treino.module').then( m => m.TreinoPageModule)
  },
  {
    path: 'add-treino',
    loadChildren: () => import('./pages/treinos/add-treino/add-treino.module').then( m => m.AddTreinoPageModule)
  },
  {
    path: 'add-exercicio',
    loadChildren: () => import('./pages/treinos/add-exercicio/add-exercicio.module').then( m => m.AddExercicioPageModule)
  },

  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
