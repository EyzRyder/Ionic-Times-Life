import { TabsPage } from './../../tabs/tabs.page';
import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage implements OnInit {

  list;

  constructor(
    public userAuthService: UserAuthService,
    public tabsPage: TabsPage,
    public listService: ListService,
  ) {


  }

  ngOnInit() {

  }
  showImcDescription(des) {
    if (this.tabsPage.imc < 20) {
      this.list = this.listService.list.pesoBaixo.rec;
      return this.listService.list.pesoBaixo[des];
    }
    else if (this.tabsPage.imc <= 25) {
      return this.listService.list.pesoNormal[des];
    }
    else if (this.tabsPage.imc <= 30) {
      return this.listService.list.preObesidade[des];
    }
    else if (this.tabsPage.imc <= 40) {
      this.list = this.listService.list.obesidade.rec;
      return this.listService.list.obesidade[des];
    } else if (this.tabsPage.imc > 40) {
      this.list = this.listService.list.pesoBaixo.rec;
      return this.listService.list.obesidadeGrave[des];
    } else {
      return 'Calcule seu peso no Dashboard';
    }
  }

  }

  
