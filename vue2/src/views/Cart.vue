<!--
 * @Author: your name
 * @Date: 2020-03-15 10:27:06
 * @LastEditTime: 2020-04-07 14:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/views/Home.vue
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
    <div>总价 {{total}}</div>
    <cube-button :disabled="true" v-if="total<minTotal">还差{{minTotal-total}}可以购买</cube-button>
    <cube-button v-else>下单</cube-button>
  </div>
</template>

<script>
import { mapState, mapGetters,mapMutations } from "vuex";
export default {
  data() {
    return {
      minTotal: 1000
    };
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart
    }),
    ...mapGetters({
      total: "total"
    })
  },
  methods: {
    ...mapMutations(['cartadd','cartremove']),
    addCart(index) {
      this.cartadd(index);
      // this.$store.commit("cartadd", index);
    },
    removeCart(index) {
      this.cartremove(index);
      // this.$store.commit("cartremove", index);
    }
  }
};
</script>

<style lang="stylus">
.good {
  padding: 10px;
  text-align: left;

  .right {
    float: right;
  }

  i {
    font-size: 18px;
  }
}
</style>