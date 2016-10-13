import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PageService} from './../page.service';
import {PageItem} from './../page.interface';

@Component({
  templateUrl:'./guidelines.component.html',
  styleUrls: ['./guidelines.component.css']
})

export class GuidelinesComponent implements OnInit{

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute) {
  }

  page:PageItem;

  ngOnInit(): void {

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      id = id || 0;
      this.page = this.pageService.getPage(id, "guidelines");
    });
  }
}
