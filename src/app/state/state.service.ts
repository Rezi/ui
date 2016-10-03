import { Injectable } from '@angular/core';
import { StateItem } from './state.interface';
import { StateItems } from './state.items';

import {mergeDeep} from '../helpers/functions'

@Injectable()
export class StateService {

  wrap = document.createElement('div');
  temp = document.createElement('div');

  getState(stateName:string):StateItem {
    let finalObj:StateItem = {
      id:null,
      css:{}
    };

    let realRoute = false;


    StateItems.some(function(stateObj){
      finalObj = mergeDeep(finalObj, stateObj);
      if(stateObj.id === stateName){
      realRoute = true;
      }
      return stateObj.id === stateName;
    })

    if (!realRoute){
      finalObj = StateItems[0];
    }

    let cssString = "";

    for ( const key in finalObj.css.global) {
      cssString += key + " ";
      cssString += JSON.stringify(finalObj.css.global[key]);
    }

    cssString = cssString.replace (/"/g,'');
    cssString = cssString.replace (/,/g,';');
    this.addGlobalCss(cssString);

    return finalObj;
  }

  addGlobalCss(cssRules:string){


    // rules like "a {color: red}" etc.

    // append wrapper to the body on the first call
    if (!this.wrap.id) {
        this.wrap.id = 'injected-css';
        this.wrap.style.display = 'none';
        document.body.appendChild(this.wrap);
    }else{
      this.wrap.innerHTML = "";
    }

    // <br> for IE: http://goo.gl/vLY4x7
    this.temp.innerHTML = '<br><style>'+ cssRules +'</style>';
    this.wrap.appendChild( this.temp.children[1] );
  }
}
