import { StateItem } from './state.interface';

export const StateItems: StateItem[] = [
  {
    id:"/about",
    css:{
      q1: {"background":"#FFF", color:"#999"},
      q2: {"background":"#DDD", color:"#000"},
      q3: {"background":"#BBB"},
      q4: {"background":"#999", color:"#000"},
      global:{}
    }
  },
  {
    id:"/layout",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/layout/1",
    css:{
      q1: {flex: "38.5% 1 0", height: "30%", "border-right":"3px solid red", "border-bottom":"3px solid red"},
      q2: {flex: "61.5% 1 0", height: "30%", "border-bottom":"3px solid red"},
      q3: {flex: "38.5% 1 0", height: "70%", "border-right":"3px solid red"},
      q4: {flex: "61.5% 1 0", height: "70%"},
      global:{}
    }
  },
  {
    id:"/layout/2",
    css:{
      q1: {flex: "25% 1 0", "height": "130px", "font-size":"12px", "align-items":"center"},
      q2: {flex: "75% 1 0", "height": "130px"},
      q3: {flex: "25% 1 0", "height": "calc(100% - 130px)", "font-size":"15px","background": "repeating-linear-gradient( to right, #aaa, #aaa 33.3%, #999 33.3%, #999 66.6% )"},
      q4: {flex: "75% 1 0", "height": "calc(100% - 130px)","background": "repeating-linear-gradient( to right, #ccc, #ccc 11.1%, #bbb 11.1%, #bbb 22.2% )"},
      global:{}
    }
  },
  {
    id:"/layout/3",
    css:{
      q1: {"border-right":"0px solid","border-bottom":"0px solid"},
      q2: {"border-bottom":"0px solid"},
      q3: {"border-right":"0px solid", "background":"#BBB"},
      q4: {"background":"#999"},
      global:{}
    }
  },
  {
    id:"/layout/4",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  /*{
    id:"/layout/2",
    css:{
      q1: {flex: "0 0 180px", "min-width": "180px", height: "130px", "font-size":"11px"},
      q2: {flex: "1 0 auto", "min-width": "calc(100% - 180px)", height: "130px"},
      q3: {flex: "0 0 180px", "min-width": "180px", height: "calc(100% - 130px)", "font-size":"13px"},
      q4: {flex: "1 0 auto", "min-width": "calc(100% - 180px)", height: "calc(100% - 130px)"},
      global:{}
    }
  },*/
  {
    id:"/colors",
    css:{
      q1: {"background":"#B1487D", color: "#D074A3"},
      q2: {"background":"#D86D57", color: "#BB4931"},
      q3: {"background":"#3F9D62"},
      q4: {"background":"#9CC851", color: "#5C8713"},
      global:{}
    }
  },
  {
    id:"/colors/1",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/usability",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{".navLink:after":{"content":"''"}}
    }
  },
  {
    id:"/guidelines",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  }
];
