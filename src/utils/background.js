/* eslint-disable no-undef */
/**
 * @ Author: Gszs
 * @ Create Time: 2020-01-25 15:51:45
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-25 23:01:13
 * @ Description: 后台JS
 */

import { searchUrl } from './matchSearch.js';

let e = {};

e.contextMenuId = chrome.contextMenus.create({
  title: "文档搜索小工具",
  contexts: ["selection"],
  documentUrlPatterns: ["http://*/*", "https://*/*", "file://*/*"]
})

// eslint-disable-next-line no-unused-vars
for (let [key, value] of Object.entries(searchUrl)) { 
  chrome.contextMenus.create({
    title: `在${key}搜索: 🎯 %s`,
    contexts: ['selection'],
    parentId: e.contextMenuId,
    onclick(params) { 
      chrome.tabs.create({url: value + params.selectionText});
    }
  })

}

// TODO: 增加一个欢迎安装的提示
chrome.runtime.onInstalled.addListener(function () { 
  alert('👏👏👏欢迎安装插件')
})