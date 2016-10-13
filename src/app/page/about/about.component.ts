import { Component, OnInit, OnDestroy, HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PageService} from './../page.service';
import {PageItem} from './../page.interface';

@Component({
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit{
  constructor(
    private pageService: PageService,
    private route: ActivatedRoute) {
  }

  page:PageItem;

  ngOnInit(): void {

    console.log('opened');

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      id = id || 0;
      this.page = this.pageService.getPage(id, "about");
    });
  }
}
