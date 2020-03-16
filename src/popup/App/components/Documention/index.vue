<!--
 * @ Author: Gszs
 * @ Create Time: 2020-01-07 22:51:41
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-25 09:55:57
 * @ Description: 文档
 -->

<template>
  <div class="documention-box">
    <el-button-group>
      <el-button 
        v-for="(key, val) in iconForDocumention" 
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

import {iconForDocumention} from '@/utils/matchSearch'
import controlIconMixins from '../mixins/controlIcon'

export default {
  name: 'Documention',
  data(){
    return {
      currentIcon: '',
      iconForDocumention
    }
  },
  mixins: [controlIconMixins]
}
</script>

<style lang="scss">
  // @import url('../../styles/documention.scss');
  .documention-box {
    .el-button {
      font-size: 20px;
      padding: 9px;
      margin : 1px 5px 15px 5px !important;
    }
  }
</style>