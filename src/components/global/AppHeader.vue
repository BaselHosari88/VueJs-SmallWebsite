<template>
  <div class="header">
   <div class="container">

    <div class="logo">BaselVue</div>
    <ul class="text-right">
      <router-link to="/"><a>Home</a></router-link>
      |
      <router-link to="/about"><a>About </a></router-link
      >|
      <router-link to="/help" replace> <a>Help</a> </router-link>
      |
      <router-link to="/blog" > <a>Blog</a> </router-link>
    </ul>



   </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>


<style lang="scss">
.header{
    background-color: #a98989;
    color: #fff;
    overflow: hidden;
    
}
.logo{
    font-size: 24px;
    padding: 20px;
    float: left;
    width: 200px;
}
ul{
    float: right;
    width: calc(80% - 700px);
    padding: 19px;
    margin: 0;
}
a{
    color: #fff;
    text-decoration: none;
}

</style>