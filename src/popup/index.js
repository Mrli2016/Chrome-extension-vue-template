(function insertElementIcons() {
  let script = document.createElement('script');
  script.src = 'https://at.alicdn.com/t/font_1609584_k66xj3dwj9.js'
  document.head.appendChild(script)
})();

import Vue from "vue";
import AppComponent from "./App/App.vue";
import './App/Icon'

import './App/styles/index.scss'

Vue.component("app-component", AppComponent);

import {
  Button,
  ButtonGroup,
  Input,
  TabPane, 
  Tabs,
  Tooltip
} from 'element-ui';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Input);
Vue.use(TabPane);
Vue.use(Tabs);
Vue.use(Tooltip)

new Vue({
  el: "#app",
  render: createElement => { 
    return createElement(AppComponent);
  }
});