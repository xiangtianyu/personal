<template>
  <el-row>
    <el-col :span="24">
      <div class="line"></div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo main-nav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#99a9bf"
        text-color="#fff"
        active-text-color="#000000">
        <el-menu-item disabled><img src="../assets/main.jpg"></el-menu-item>
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">博客</el-menu-item>
        <el-menu-item index="3">简历</el-menu-item>
        <el-menu-item index="4">关于</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        let href = ["/", "/blog", "/resume", "/about"];
        window.location.href = href[key-1];
        console.log(key, keyPath, this);
      }
    }
  }
</script>

<style>
  .main-nav {
    padding-left: 100px;
  }

  a {
    text-decoration: none;
    font-size: 16px;
  }
</style>
