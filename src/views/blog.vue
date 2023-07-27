<template>
  <div class="our-blog">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>

    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="posts-area">
            <BlogPosts
              v-for="post in posts"
              v-bind:key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :author="post.author"
              :category="post.category"
              :content="post.content"
            />
          </div>
        </div>

        <div class="col-md-4">
          <div class="sidebar">
            <blog-sidebar></blog-sidebar>
          </div>
        </div>
      </div>
    </div>
    <div class="alert alert-dark" role="alert">
      A simple dark alert—check it out!
    </div>
  </div>
</template>
  
  <script>
// @ is an alias to /src
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import jsonPosts from "../json/blogpost.json";
import BlogSidebar from "@/components/Blog/BlogSidebar.vue";

export default {
  name: "blog",
  components: {
    BlogPosts,
    BlogSidebar,
  },
  data: function () {
    return {
      pageName: "blog Page",
      pageDescription: "this is Blog Page",
      posts: jsonPosts,
    };
  },
};
</script>
  