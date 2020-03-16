<!--
 * @ Author: Gszs
 * @ Create Time: 2020-01-07 22:51:35
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-25 15:06:18
 * @ Description: 生活
 -->

<template>
  <div class="life-box">
    <el-button-group>
      <el-button 
        v-for="(key, val) in iconForLife" 
        :key="key" 
        class="btnStyle"
        @click="getCurrentIcon"
      >
        <el-tooltip class="tooltip-style" 
          effect="dark" 
          :content="key" 
          placement="top-start"
        >
          <svg-icon :iconName="val" class="icon" />
        </el-tooltip>
      </el-button>
    </el-button-group>
  </div>
</template>

<script>

import {iconForLife} from '@/utils/matchSearch'
import controlIconMixins from '../mixins/controlIcon'

export default {
  name: 'Life',
  data(){
    return {
      currentIcon: '',
      iconForLife
    }
  },
  mixins: [controlIconMixins]
}
</script>

<style lang="scss">
  // @import url('../../styles/documention.scss');
  .life-box {
    .el-button {
      font-size: 20px;
      padding: 9px;
      margin : 1px 5px 15px 5px !important;
    }
  }
</style>