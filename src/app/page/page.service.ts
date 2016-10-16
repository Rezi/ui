import { Injectable } from '@angular/core';
import { PageItem } from './page.interface';
import { PageItems } from './page.items';
import { NavItem } from '../nav/nav.interface';

@Injectable()
export class PageService {

  activePage:PageItem; 

  getPage(id:number, pageName:string){

    let page:PageItem[];

    page = PageItems.filter((page)=>{
      return page.id === id && page.name === pageName;
    })

    this.activePage = page[0];

    return page[0];
  }

  getPageOfTypeLength(pageName:string, id:number){

    let pages = PageItems.filter((el)=>{
      return el.name === pageName;
    });

    let allSubPagesNumber = pages.length - 1;

    let pagination = {
      total: allSubPagesNumber,
      id: id
    };

    return pagination;
  }

  public getNavigationData(): NavItem[]{
    return PageItems.filter((page) => {
      return page.primary;
    }).map((page): NavItem =>  {
      return {
        id:page.name,
        text:page.translation,
        link: "/"+page.name
      };
    });
  }

  getPrevSectionId(sectionID: string){
    let sections = this.getNavigationData();
    let sectionIndex = sections.findIndex((section) => {
      return section.id === sectionID; 
    });

    if(sectionIndex > 0){
      return sections[sectionIndex - 1].id;
    } else {
      return "";
    }
  }

  getNextSectionId(sectionID:string){
    let sections = this.getNavigationData();
    let sectionIndex = sections.findIndex((section) => {
      return section.id === sectionID; 
    });

    if(sectionIndex < sections.length - 1){
      return sections[sectionIndex + 1].id;
    } else {
      return "";
    }
  }
}
