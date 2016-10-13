import { Component } from '@angular/core';
import { NavItem } from './nav.interface';

const navItems: NavItem[] = [
  {id:'about', text:"O příručce",link:"/about"},
  {id:'layout',text:"Layout",link:"/layout"},
  {id:'colors',text:"Barvy",link:"/colors"},
  {id:'usability',text:"Použitelnost",link:"/usability"},
  {id:'guidelines',text:"Guidelines",link:"/guidelines"},
];

@Component({
  selector: 'nav',
  templateUrl:'./nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  navItems = navItems;
  menuOpened : boolean = false;
}
