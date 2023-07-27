<template>
  <div class="post-box">
    <span class="post-views">{{ views }}</span>
    <h3 class="post-title">{{title}}</h3>
    <span class="post-date">{{ date }}</span>

    <p class="post-content">
     {{ content }}
    </p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author bg-info">{{ author }}</span>
      </div>
      <div class="col-sm-6">
        <span class="post-category bg-light text-info">{{ category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['views','title','category','author','content','date'],
  name: "post",
};
</script>

<style lang="scss" scoped>
.post-box {
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;
  position: relative;
  text-align: left;
  margin-bottom: 20px;
  .post-views {
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: rgb(167, 129, 72);
    border-radius: 4px;
    padding: 1 px 5 px;
    color: #ddd;
    text-align: center;
    font-weight: bold;
  }
  .post-title {
    font-weight: bold;
    color: royalblue;
    padding: 20px;
  }
  .post-date {
    display: block;
    padding: 0 0 5px;
    color: #888;
    font-size: 14px;
  }
  .post-content {
    line-height: 1.5;
    color: #3666;
  }
  .post-author {
    background-color: #ddd;
    padding: 6px 10px;
    border-radius: 4px;
    color: black;
  }
  .post-category {
    background-color: #0e1b2d;
    padding: 6px 10px;
    border-radius: 4px;
    color: rgb(173, 57, 57);
  }
}
</style>