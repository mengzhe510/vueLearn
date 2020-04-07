<!--
 * @Author: your name
 * @Date: 2020-03-18 20:38:22
 * @LastEditTime: 2020-04-07 11:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/components/Cart.vue
 -->
<template>
  <div>
    <div class="good" v-for="(item,index) in cart" :key="item.id">
      {{item.title}}
      <div class="right">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span>{{item.cartCount}}</span>
        <i class="cubeic-add" @click="addCart(index)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      minTotal: 1000
    };
  },
  computed: {
    
  },
};
</script>

<style lang="scss" scoped>
</style>