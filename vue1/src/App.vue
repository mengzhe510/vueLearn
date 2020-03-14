<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link ></router-link> -->
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <button v-if="$store.state.user.isLogin" @click="logoutFn">注销</button>
      <!-- <router-link to="/login">Login</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  methods: {
    ...mapActions(["logout"]),
    logoutFn() {
      this.logout().then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: relative;
  padding: 12px 30px;
  display: flex;
  justify-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: border-box;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
