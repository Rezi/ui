import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PageService} from './page.service';
import {PageItem} from './page.interface';

@Component({
  templateUrl:'./page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent implements OnInit{


  constructor(
    private pageService: PageService,
    private route: ActivatedRoute) {
  }

  page:PageItem;

  ngOnInit(): void {


    this.route.url.forEach((params: Params) => {

      let pageName = params[0].path;
      let id = 0;

      if(params[1]){
        id = +params[1].path;
      }
       

      this.page = this.pageService.getPage(id, pageName);
      
    });    
  }
}
