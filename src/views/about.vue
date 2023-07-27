<template>
  <div class="about">
    <h1>{{pageName}}</h1>
    <p>{{ pageDescription }}</p>
    <div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
 
    
  </div>
</template>



<script>
// @ is an alias to /src



export default {
  name: "about",
  data:function (){
    return {
      pageName: 'About Us',
      pageDescription:'This is About us page',
    }
  },
  
};
</script>

    Help
