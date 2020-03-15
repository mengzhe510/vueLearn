<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
    <cube-tab-bar v-model="selectLabel" :data="tabs" @change="changeHandler">
      <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.value" :key="index">
        <div>{{item.label}}</div>
        <!-- <span class="badge" v-if="item.label=='Cart'">{{cartTotal}}</span> -->
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      transitionName: "route-forward",
      selectLabel: "/",
      tabs: [
        {
          label: "Home",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "Cart",
          value: "/cart",
          icon: "cubeic-mall"
        },
        {
          label: "Me",
          value: "/me",
          icon: "cubeic-person"
        }
      ]
    };
  },
  created() {
    this.selectLabel = this.$route.path;
  },
  methods: {
    changeHandler(val) {
      this.$router.push(val);
    }
  }
};
</script>

<style lang="stylus" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.cube-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #edf0f4;
}

.cube-tab-bar-slider {
  top: 0;
}

// 
.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-bottom: 40px;
}
</style>
