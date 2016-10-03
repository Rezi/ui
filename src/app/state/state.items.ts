import { StateItem } from './state.interface';

export const StateItems: StateItem[] = [
  {
    id:"/about",
    css:{
      q1: {"background-color":"#FFF", color:"#999"},
      q2: {"background-color":"#DDD", color:"#000"},
      q3: {"background-color":"#BBB"},
      q4: {"background-color":"#999", color:"#000"},
      global:{}
    }
  },
  {
    id:"/layout",
    css:{
      q1: {flex: "38.5% 1 0", height: "30%"},
      q2: {flex: "61.5% 1 0", height: "30%"},
      q3: {flex: "38.5% 1 0", height: "70%"},
      q4: {flex: "61.5% 1 0", height: "70%"},
      global:{}
    }
  },
  {
    id:"/colors",
    css:{
      q1: {"background-color":"#B1487D", color: "#D074A3"},
      q2: {"background-color":"#D86D57", color: "#BB4931"},
      q3: {"background-color":"#3F9D62"},
      q4: {"background-color":"#9CC851", color: "#5C8713"},
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
      global:{".navLink:after":{"content":"' ❱'"}}
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
