<!--
 * @ Author: Gszs
 * @ Create Time: 2020-01-08 09:04:53
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-27 22:20:27
 * @ Description: 主文件
 -->

<template>
  <div class="popBox">
    <el-input 
      placeholder="请输入查询内容" 
      v-model="input" size="small" 
      @keyup.enter.native="querySearch"
      id="inputObj"
      autofocus
    >
      <el-button @click="querySearch" slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-tabs v-model="activeName" @tab-click="tabClick" >
      <el-tab-pane v-for="item in tabOptions" 
        :key="item.key" 
        :label="item.label"
        :name="item.key"
      >
        <transition name="fade-transform" mode="in-out">
          <component 
            ref="getIconType" 
            :is="currentComponent" 
            :tab-key="item.key" 
            v-if="activeName === item.key" 
            @getFocus="getFocus"
          />
        </transition>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { Documention, Life, Other } from './components';
import { returnSerarchUrl } from '../../utils/matchSearch'

export default {
  name: "app",
  components: { Documention, Life, Other }, 
  data() {
    return {
      activeName: 'Documention',
      input: "",
      currentComponent: 'Documention',
      tabOptions: [
        { label: '文档', key: 'Documention' },
        { label: '生活', key: 'Life' },
        { label: '杂项', key: 'Other' }
      ]
    };
  },
  methods: {
    querySearch() {
      if (this.input) {
        if(!this.$refs.getIconType[0].currentIcon){
          Message({
            message: "请先选中要搜索的网站",
            center: true,
            type: "error",
            duration: 1000
          });  
        }else{
          // 获取对应网站的搜索网址
          // eslint-disable-next-line no-undef
          chrome.tabs.create({
            url: `${returnSerarchUrl(this.$refs.getIconType[0].currentIcon)}` + this.input
          })
        }
      } else {
        Message({
          message: "请输入内容",
          center: true,
          type: "error",
          duration: 1000
        });
      }
    },
    // 重新取回焦点
    getFocus(){
      document.querySelector('#inputObj').focus()
    },
    
    // 切换动态组件
    tabClick(tab){
      this.currentComponent = tab.name
    }
  }
};
</script>

<style>
.el-message {
  width: 20px;
  height: 10px;
}
</style>

<style lang="scss" scoped>
  .popBox{
    width: 200px;
    height: 200px;
  }
</style>
