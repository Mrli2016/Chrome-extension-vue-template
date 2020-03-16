<!--
 * @ Author: Gszs
 * @ Create Time: 2020-01-24 16:22:55
 * @ Modified by: Gszs
 * @ Modified time: 2020-01-24 18:09:58
 * @ Description: 封装SVG图标
 -->

<template>
  <svg class="icon" aria-hidden="true">
    <use :href="iconName"></use>
  </svg>
</template>

<script>
export default {
  data(){
   return {

   }
  },
  props: {
    iconName : {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scope>
  @import url('../../styles/svgicon.scss');
</style>