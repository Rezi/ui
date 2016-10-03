import { Injectable } from '@angular/core';
import { PageItem } from './page.interface';
import { PageItems } from './page.items';

@Injectable()
export class PageService {
  getPage(id:number, pageName:string){

    let page:PageItem[];

    page = PageItems.filter((el)=>{
      return el.id === id && el.name === pageName;
    })

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
}
