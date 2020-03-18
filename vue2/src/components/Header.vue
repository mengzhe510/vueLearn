<!--
 * @Author: your name
 * @Date: 2020-03-18 16:24:11
 * @LastEditTime: 2020-03-18 17:07:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/components/Header.vue
 -->
<template>
  <div class="header">
    <h1>{{title}}</h1>
    <div class="extend">
      <slot></slot>
    </div>
    <!-- <i v-if="$routerHistory.canBack()" @click="back" class="cubeic-back"></i> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    showback: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {}
  }
};
</script>

<style lang="stylus" scoped>
.header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #edf0f4;

  .cubeic-back {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 15px;
    color: #fc915b;
  }

  .extend {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 15px;
    color: #fc915b;
  }
}
</style>