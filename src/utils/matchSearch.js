/**
 * @ Author: Gszs
 * @ Create Time: 2020-01-24 19:09:09
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-26 11:33:08
 * @ Description: 匹配命中按钮
 */

// 图标设置-文档区域
export const iconForDocumention = {

  // 文档区域
  '#icon-stackoverflow' : '程序设计领域的问答网站 🔍',
  '#icon-python' : 'Python官方文档 📒',
  '#icon-Nodejs' : 'Node中文文档 📒',
  '#icon-React' : 'React官方文档 📒',
  '#icon-Vue' : 'Vue官方文档 📒',
  '#icon-elementor' : '饿了吗UI官方文档 📒',
  '#icon-baidu' : '百度一下 🔍',
  '#icon-chrome' : '谷歌搜索 🔍',
  '#icon-mozilla' : 'MDN 🔍',
  '#icon-electron' : 'Electron文档 🎯',
  '#icon-npm' : 'NPM 🎯',
}

// 图标设置-杂项区域
export const iconForOther = {
  '#icon-googletranslate': '谷歌翻译 📝',
  '#icon-git': 'GitHub 🎯',
  '#icon-iconfont': '阿里妈妈图标库 📚'
}

// 图标设置-生活区域
export const iconForLife = {

  '#icon-bilibili': 'B站 🎬',
  '#icon-youtube': '油管 🎬',
}


// 搜索网址配置
export const searchUrl = {

  // 文档区域
  'chrome' : 'https://google.com/search?q=',
  'stackoverflow' : 'https://stackoverflow.com/search?q=',
  'python' : 'https://docs.python.org/zh-cn/3/search.html?q=',
  'Nodejs' : 'http://nodejs.cn/api/',
  'React' : 'https://zh-hans.reactjs.org/?q=',
  'Vue' : 'https://cn.vuejs.org/v2/api/?#',
  'elementor' : 'https://element.eleme.cn/2.9/#/zh-CN/component/',
  'baidu' : 'https://baidu.com/s?tn=se_chromelist&wd=',
  'mozilla' : 'https://developer.mozilla.org/zh-CN/search?q=',
  'electron' : 'https://github.com/electron/i18n/blob/master/content/zh-CN/docs/tutorial/',
  'npm' : 'https://www.npmjs.com/search?q=',
  
  // 杂项区域
  'googletranslate': 'https://translate.google.cn/#view=home&op=translate&sl=auto&tl=en&text=',
  'git' : 'https://github.com/search?q=',

  // 生活区域
  'bilibili': 'https://search.bilibili.com/all?keyword=',
  'youtube' : 'https://www.youtube.com/results?search_query='

}

export const returnSerarchUrl = function(iconType) { 
  for (let i in searchUrl) { 
    if (iconType === i) {
      return searchUrl[i]
    }
  }
}