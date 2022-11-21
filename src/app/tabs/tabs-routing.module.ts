import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },{
      path: 'dashborad',
        loadChildren: () => import('../pages/dashborad/dashborad.module').then(m => m.DashboradPageModule)
      },
      {
        path: 'metas',
        loadChildren: () => import('../pages/metas/metas.module').then(m => m.MetasPageModule)
      },
      {
        path: 'saude',
        loadChildren: () => import('../pages/saude/saude.module').then(m => m.SaudePageModule)
      },
      {
        path: 'config',
        loadChildren: () => import('../pages/config/config.module').then(m => m.ConfigPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
