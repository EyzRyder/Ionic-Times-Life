import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashborad',
    pathMatch: 'full'
  },
  {
    path: 'dashborad',
    loadChildren: () => import('./pages/dashborad/dashborad.module').then( m => m.DashboradPageModule)
  },
  {
    path: 'metas',
    loadChildren: () => import('./pages/metas/metas.module').then( m => m.MetasPageModule)
  },
  {
    path: 'saude',
    loadChildren: () => import('./pages/saude/saude.module').then( m => m.SaudePageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.module').then( m => m.BlogsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
