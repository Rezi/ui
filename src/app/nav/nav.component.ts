import { Component } from '@angular/core';
import { NavItem } from './nav.interface';

const navItems: NavItem[] = [
  {id:'about', text:"About the guide",link:"/about"},
  {id:'layout',text:"Layout",link:"/layout"},
  {id:'colors',text:"Colors",link:"/colors"},
  {id:'usability',text:"Usability",link:"/usability"},
  {id:'guidelines',text:"Guidelines",link:"/guidelines"},
];

@Component({
  selector: 'nav',
  templateUrl:'./nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {
  navItems = navItems;
  menuOpened : boolean = false;
}
