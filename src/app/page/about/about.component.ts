import { Component, OnInit, OnDestroy, HostBinding,
         trigger, transition, animate,
         style, state  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {PageService} from './../page.service';
import {PageItem} from './../page.interface';

import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';


@Component({
  templateUrl:'./about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.5s ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})

export class AboutComponent implements OnInit{

  rows:{}[] = [];

  options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto',
    limit: 10,
    columns: [
      new TableColumn({ prop: 'name' }),
      new TableColumn({ name: 'Gender' }),
      new TableColumn({ name: 'Company'})
    ]
  });

  // @HostBinding('@routeAnimation') get routeAnimation() {
  //   return true;
  // }
  //
  // @HostBinding('style.display') get display() {
  //   return 'block';
  // }
  //
  // @HostBinding('style.position') get position() {
  //   return 'absolute';
  // }

  constructor(
    private pageService: PageService,
    private route: ActivatedRoute) {
      this.fetch((data:any) => {
        this.rows.push(...data);
      });
  }

  fetch(cb:any) {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://unpkg.com/angular2-data-table@0.2.0/assets/data/company.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
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
