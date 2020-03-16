<!--
 * @ Author: Gszs
 * @ Create Time: 2020-01-07 22:52:38
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-07 22:52:40
 * @ Description: 杂项
 -->

<template>
  <div class="other-box">
    <el-button-group>
      <el-button 
        v-for="(key, val) in iconForOther" 
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

import {iconForOther} from '@/utils/matchSearch'
import controlIconMixins from '../mixins/controlIcon'

export default {
  name: 'Other',
  data(){
    return {
      currentIcon: '',
      iconForOther
    }
  },
  mixins: [controlIconMixins]
}
</script>

<style lang="scss">
  .other-box {
    .el-button {
      font-size: 20px;
      padding: 9px;
      margin : 1px 5px 15px 5px !important;
    }
  }
</style>