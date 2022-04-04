<!-- 首页轮播图 -->
<template>
  <el-carousel :interval="3000" arrow="always">
    <el-carousel-item id="el-carousel-item1"></el-carousel-item>
    <el-carousel-item id="el-carousel-item2"></el-carousel-item>
    <el-carousel-item id="el-carousel-item3"></el-carousel-item>
    <el-carousel-item id="el-carousel-item4"></el-carousel-item>
    <el-carousel-item id="el-carousel-item5"></el-carousel-item>
  </el-carousel>
</template>

<script>

export default {

}
</script>

<style>
  .el-carousel__item {
    -moz-background-size:100% 100%;
    background-size:100% 100%;
  }
  #el-carousel-item1 {
    background-image: url('../../assets/images/slider/01.jpg');
  }

  #el-carousel-item2 {
    background-image: url('../../assets/images/slider/02.jpg');
  }

  #el-carousel-item3 {
    background-image: url('../../assets/images/slider/03.jpg');
  }

  #el-carousel-item4 {
    background-image: url('../../assets/images/slider/04.jpg');
  }

  #el-carousel-item5 {
    background-image: url('../../assets/images/slider/05.jpg');
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>