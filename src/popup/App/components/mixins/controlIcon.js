/**
 * @ Author: Gszs
 * @ Create Time: 2020-01-25 14:43:28
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-25 14:44:48
 * @ Description: 主要用于图标类
 */

export default {
  methods: {
    getCurrentIcon(e){
      const currentObj = e.currentTarget.firstElementChild.getElementsByTagName('use')[0].href.baseVal;
      this.currentIcon = currentObj.split('-')[1];

      // TODO: 这里注意一个小BUG就是先输入内容然后点击icon，
      // 这时使用回车按钮是无效的，所以要把焦点给回input
      this.$emit('getFocus')
    }
  }
}