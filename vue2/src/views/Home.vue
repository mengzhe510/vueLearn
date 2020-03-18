<!--
 * @Author: your name
 * @Date: 2020-03-15 10:27:06
 * @LastEditTime: 2020-03-18 20:29:21
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
    <good-list :data="goods"></good-list>
  </div>
</template>

<script>
import VHeader from "@/components/Header";
import GoodList from "@/components/GoodList";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    VHeader,
    GoodList
  },
  created() {
    this.getGoods();
  },
  methods: {
    ...mapActions(["getGoods"])
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