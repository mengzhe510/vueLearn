<!--
 * @Author: your name
 * @Date: 2020-03-15 10:27:06
 * @LastEditTime: 2020-04-07 15:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vueLearn/vue2/src/views/Home.vue
 -->
<template>
  <div>
    <v-header title="开课吧">123</v-header>
    <!-- 轮播图 -->
    <cube-slide :data="slider" :interval="5000">
      <cube-slide-item v-for="(item,index) in slider" :key="index">
        <router-link :to="`/detail/${item.id}`">
          <img class="slider" :src="item.img" />
        </router-link>
      </cube-slide-item>
    </cube-slide>
    <good-list :data="goods" @cartanim="startCartAnim"></good-list>
  </div>
</template>

<script>
import VHeader from "@/components/Header";
import GoodList from "@/components/GoodList";
import CartAnim from "@/components/CartAnimate";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    VHeader,
    GoodList,
    // CartAnim
  },
  created() {
    this.getGoods();
  },
  methods: {
    ...mapActions(["getGoods"]),
    startCartAnim(el) {
      // 创建小球动画实例，开始动画
      // const anim = this.$createCartAnim({
      //   onTransitionend() {
      //     anim.remove();
      //   }
      // });
      // anim.start(el);
      // 方式2
      const anim = this.$create(CartAnim, {
        pos: { left: "45%", bottom: "16px" }
      });
      anim.start(el);
      anim.$on("transitionend", anim.remove);
    }
  },
  computed: {
    ...mapState({ slider: state => state.goods.slider }),
    ...mapGetters(["goods"])
  }
};
</script>

<style lang="stylus" scoped>
.cube-slide {
  height: auto;
}

.cube-slide-item > a > img {
  width: 100%;
  height: auto;
}
</style>