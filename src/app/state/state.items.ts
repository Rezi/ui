import { StateItem } from './state.interface';

export const StateItems: StateItem[] = [
  {
    id:"/about",
    /* the first state need to have all styles later used in further steps defined here with their default values */
    css:{
      q1: {width:"50%", height: "50%","background":"#FFF", "border-right":"0", "border-bottom":"0", color:"#999", "padding":"20px"},
      q2: {width:"50%", height: "50%","background":"#DDD", "border-bottom":"0", color:"#000", "justify-content":"center", "padding":"20px", "padding-left":"20px"},
      q3: {width:"50%", height: "50%","background":"#BBB", "border-right":"0", "padding":"20px"},
      q4: {width:"50%", height: "50%","background":"#999", color:"#000"},
      global:{
        ".navLink.active":{"background":"#999", "color": "#fff"},
        ".bar":{"display":"none !important"},
        ".prev": {"background":"#333"},
        ".next": {"background":"#333"},
        ".next:after": {"content":"'⇨'"},
        ".prev:after": {"content":"'⇦'"},
         ".next.next-section:after": {"transform":"rotate(90deg)"},
         ".prev.prev-section:after": {"transform":"rotate(90deg)"},
         ".q4 ng-component ul li:before":{"color":"#c8c8c8"}         
      }
    }
  },
  {
    id:"/about/1",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/about/2",
    css:{
      q1: {"width":"0%", "height": "0%", "padding":"0px"},
      q2: {"width":"100%", "height": "0%", "padding":"0px"},
      q3: {"width":"0%", "height": "0%", "padding":"0px"},
      q4: {"width":"100%", "height": "100%"},
      global:{}
    }
  },
  {
    id:"/about/3",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/about/4",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/layout",
    css:{
      q1: {width:"50%", height: "50%", "padding":"20px"},
      q2: {width:"50%", height: "50%", "padding":"20px"},
      q3: {width:"50%", height: "50%", "padding":"20px"},
      q4: {width:"50%", height: "50%"},
      global:{}
    }
  },
  
  {
    id:"/layout/1",
    css:{
      q1: {width: "38.5%", height: "33%"},
      q2: {width: "61.5%", height: "33%", "justify-content":"flex-start", "padding-left":"100px"},
      q3: {width: "38.5%", height: "67%"},
      q4: {width: "61.5%", height: "67%"},
      global:{}
    }
  },
  {
    id:"/layout/2",
    css:{
      q1: {width: "25%", "height": "130px", "font-size":"12px", "align-items":"center"},
      q2: {width: "75%", "height": "130px"},
      q3: {width: "25%", "height": "calc(100% - 130px)", "font-size":"15px","background": "repeating-linear-gradient( to right, #aaa, #aaa 33.3%, #999 33.3%, #999 66.6% )"},
      q4: {width: "75%", "height": "calc(100% - 130px)","background": "repeating-linear-gradient( to right, #ccc, #ccc 11.1%, #bbb 11.1%, #bbb 22.2% )"},
      global:{}
    }
  },
  {
    id:"/layout/3",
    css:{
      q1: {},
      q2: {},
      q3: {"background":"#BBB"},
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
  {
    id:"/layout/5",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/colors",
    css:{
      q1: {"background":"#B1487D", color: "#D074A3"},
      q2: {"background":"#D86D57", color: "#3F9D62"},
      q3: {"background":"#3F9D62"},
      q4: {"background":"#9CC851", color: "#374e0f"},
      global:{
        ".navLink.active":{"background":"#9cc851"},
        ".q4 ng-component ul li:before":{"color":"#5C8713"}
      }
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
    id:"/colors/2",
    css:{
      q1: {"background":"#4961A1", color: "#6F80B9"},
      q2: {"background":"#9E9161", color: "#9C8E57"},
      q3: {"background":"#928763"},
      q4: {"background":"#DAC350", color: "#4c4e0f"},
      global:{
        ".navLink.active":{"background":"#DAC350"},
        ".q4 ng-component ul li:before":{"color":"#848816"}
      }
    }
  },
  {
    id:"/colors/3",
    css:{
      q1: {"background":"#488e35", color: "#8ACD4A"},
      q2: {"background":"#8ACD4A", color: "#488e35"},
      q3: {"background":"#8ACD4A"},
      q4: {"background":"#d7f3bc", color: "#4c4e0f"},
      global:{
        ".navLink.active":{"background":"#d7f3bc", "color": "#488e35"},
        ".q4 ng-component ul li:before":{"color":"#8ACD4A"}
      }
    }
  },
  {
    id:"/usability",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}
    }
  },
  {
    id:"/usability/1",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{
        ".bar":{"display":"flex"},
        ".next.next-section:after": {"content":"'⇩ Guidelines'", "transform":"rotate(0)"},
      }
    }
  },
  {
    id:"/guidelines",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{
        ".prev.prev-section:after": {"content":"'⇧ Použitelnost'", "transform":"rotate(0)"}
      }
    }
  },
  {
    id:"/guidelines/1",
    css:{
      q1: {},
      q2: {},
      q3: {},
      q4: {},
      global:{}      
    }
  }
];
