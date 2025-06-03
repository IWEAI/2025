<template>
  <div>
    <el-card>
      <h2 class="title">PC MEMBERS</h2>
      <div class="mx-auto">
        <div class="text-center animate__animated animate__backInDown">
            <div class="col-md-6" style="padding: 10px"><b>Yuncheng Jiang (Co-Chair)</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Gang Li (Co-Chair)</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Ly Tran</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Christos Douligeris</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Aswani Kumar Cherukuri</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Xiaoliang Fan</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Jieyu Zhan</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Lihua Cai</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Weishan Cai</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Guojing Zhou</b></div>
            <div class="col-md-6" style="padding: 10px"><b>Wenjun Ma</b></div>
        </div>
    </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #004076;
  text-align: center;
}
h2,p{
    text-align: left;
}
.text-center{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-content: center;
    justify-content: center;
    animation-delay: 0.5s;
}
.col-md-6 {
    cursor: pointer;
    // flex: 0 0 50%;
    width: 40%;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px #004076;
    background: #004076;
    color: #fff;
    }
.col-md-6:hover {
    // 缓慢放大缓慢缩回
    transform: scale(1.02);
    transition: ease-in-out 0.2s;
    }
</style>
