import { Component } from '@angular/core';
import { NavItem } from './nav.interface';

import { PageService } from '../page/page.service'

@Component({
  selector: 'nav',
  templateUrl:'./nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  constructor(private pageService: PageService){}

  navItems = this.pageService.getNavigationData();
  menuOpened : boolean = false;
}
