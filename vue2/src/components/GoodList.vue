<template>
  <div>
    <div class="item" v-for="item in data" :key="item.id">
      <router-link :to="`/detail/${item.id}`">
        <div class="left">
          <img :src="item.img" alt />
        </div>
        <div class="right">
          <div class="title">{{item.title}}</div>
          <div class="info">
            <span>{{item.count}}人购买</span>
            <i class="cubeic-add" @click.stop.prevent="addCart($event, item)"></i>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["data"],
  methods: {
    ...mapMutations(['addcart']),
    addCart(event, item) {
      this.addcart(item);
      // console.log("event", event, "item", item);
      this.$emit("cartanim", event.target);
    }
  }
};
</script>

<style lang="stylus" scoped>
.item {
  padding: 10px;
  overflow: hidden;

  .left {
    width: 100px;
    float: left;

    img {
      width: 100%;
    }
  }

  .right {
    margin-left: 120px;
    text-align: left;

    .title {
      line-height: 30px;
    }

    .cubeic-add {
      font-size: 22px;
    }

    .info {
      text-align: right;
    }
  }
}
</style>