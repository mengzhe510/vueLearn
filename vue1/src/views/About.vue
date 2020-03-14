<!--
 * @Author: your name
 * @Date: 2020-03-09 13:10:52
 * @LastEditTime: 2020-03-12 22:12:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/src/views/About.vue
 -->
<template>
  <div>this is Page About</div>
</template>

<script>
import server from "../server/index";
export default {
  name: "About",
  created() {
    if (this.$store.state.isLogin) {
      server.getuserinfo();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>