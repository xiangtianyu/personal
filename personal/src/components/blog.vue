<template>
  <el-container>
    <el-aside width="20%"></el-aside>
    <el-main>
      <div class="blog-list" v-for="blog in blogList">
        <template>
          <div class="blog-body">
            <div style="font-weight: 800; margin-bottom: 5px;">{{ blog.title }}</div>
            <div style="font-size: 12px;">
              <span>{{ blog.author }}</span>
              <span style="margin-left: 20px; color: #969696;">{{ blog.date }}</span>
            </div>
            <div style="font-size: 14px;">
              <p>{{ blog.body }}</p>
            </div>
            <div>
              <el-tag
                v-for="tag in tags"
                :key="tag.name"
                :color="tag.color"
                size="small">
                {{tag.name}}
              </el-tag>
            </div>
          </div>
        </template>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50"
        :page-size="10">
      </el-pagination>
    </el-main>
    <el-aside width="30%"></el-aside>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        blogList: []
      };
    },
    mounted: function () {
      this.loadBlog();
    },
    methods: {
      loadBlog() {
        let blog1 = {
          articleId: 1,
          title: "xty讲故事",
          author: "长得帅",
          body: "很久很久以前...",
          date: "2018-02-30",
          tag: [
            {tid: 1, name: "生活"},
            {tid: 2, name: "日常"}
          ]
        };
        let blog2 = {
          articleId: 2,
          title: "xty带你领略不一样的崇明风土人情",
          author: "长得帅",
          body: "很久很久以前xty带你领略不一样的崇明风土人情很久很久以前xty带你领略不一样" +
          "的崇明风土人情很久很久以前xty带你领略不一样的崇明风土人情很久很久以前xty带你领略不一样" +
          "的崇明风土人情很久很久以前xty带你领略不一样的崇明风土人情...",
          date: "2018-02-30",
          tag: [
            {tid: 1, name: "生活"},
            {tid: 2, name: "日常"}
          ]
        };
        this.tags = blog1.tag;
        this.blogList = [blog1, blog1, blog2, blog2,blog2,blog2,blog2,blog2,blog2,blog2, blog1];
      }
    }
  }
</script>

<style>
  body {

  }
  .blog-list {

  }
  .blog-body {
    padding: 10px;
    border-bottom: 1px #eee solid;
    text-align: left;
  }
  .el-tag {
    margin-right: 10px;
  }

  .el-pagination {
    margin-top: 30px;
  }
</style>
