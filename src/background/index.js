/**
 * @ Author: Gszs
 * @ Create Time: 2020-01-25 21:34:11
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-27 22:43:28
 * @ Description: background
 */

// TODO: 开发模式下注入hot-reload.js , 生产模式关闭。{手动开关}


// 生产模式
(function insertElementIcons() {
  let script = document.createElement('script');
  script.src = './background.js'
  script.type = 'module'
  document.head.appendChild(script)
})();

// 开发模式
// (function insertElementIcons() {
//   let script1 = document.createElement('script');
//   script1.src = './background.js'
//   script1.type = 'module'

//   let script2 = document.createElement('script');
//   script2.src = './hot-reload.js'

//   document.head.appendChild(script2)
// })();

import Vue from "vue";
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
