<template>
  <div class="our-help">
    <h1>{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
  </div>
</template>

<script>
export default {
  name: "help",
  data:function(){
    return{
      pageName:'Help page',
      pageDescription:'this is Description page',
    }
  }
};
</script>