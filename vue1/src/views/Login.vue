<!--
 * @Author: your name
 * @Date: 2020-03-09 13:27:04
 * @LastEditTime: 2020-03-09 14:09:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue/vueLearn/vue1/src/views/Login.vue
 -->
<template>
  <div>
    <cube-form :model="model" :schema="schema" @validate="validateHandler" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        name: "",
        password: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "name",
            label: "姓名",
            props: {
              pleasehodler: "请输入姓名"
            },
            rules: {
              require: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              pleasehodler: "请输入密码"
            },
            rules: {
              require: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    validateHandler() {},
    submitHandler() {
      if (this.$store.dispatch("login")) {
        const path = this.$route.query.redirect || "/";
        this.$router.push(path);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>