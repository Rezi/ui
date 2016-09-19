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
      q1: {"background-color":"#E40045", color: "#B00035"},
      q2: {"background-color":"#FF7400", color: "#FFAA63"},
      q3: {"background-color":"#009999"},
      q4: {"background-color":"#67E300", color: "#3F8A00"},
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
