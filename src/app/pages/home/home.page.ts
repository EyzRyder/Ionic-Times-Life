import { NewArticleService } from './../../api/new-article.service';
import { TabsPage } from './../../tabs/tabs.page';
import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  selectedCategory: string = 'health'
  topHeadlines = [];
  constructor(
    public tabsPage: TabsPage,
    public userAuthService: UserAuthService,
    private articleService: NewArticleService
  ) { 
    this.articleService.getArticleByCategory(this.selectedCategory).subscribe((results) => {
      console.log(results.articles);
      this.topHeadlines.push(...results.articles);
    })
  }

  ngOnInit() {
  }

  
}
