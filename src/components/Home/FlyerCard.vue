<template>
        <!-- <el-card> -->
            <div class="dates">
                <h2>Flyer</h2>
                <img src='@/assets/imgs/flyer.png' class="img-thumbnail" width="95%">
                <p>Please download the Flyer of PKAW 2023.</p>
                [<a class="bold" href="/imgs/flyer.png" target="_blank">Download</a>]
            </div>
        <!-- </el-card> -->
</template>
<script lang="ts" setup>
</script>
<style scoped>
.dates{
    background-size: cover;
    background-position: center;
    /* background: linear-gradient(90deg,  rgba(222, 238, 255, 0.5),rgba(33, 113, 181, 0.5) 85%);*/
    background: #004076; 
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #a1adb9;
    color: #fff;
}
.dates:hover{
    box-shadow: 0 0 20px #a1adb9;
    transition: all linear 0.3s;
    scale: 1.01;
}
el-card{
    width: 100%;
}
h2{
    padding-bottom: 10px;
    border-bottom: 1px solid #fff;
}
.bold{
    font-weight: bold;
}
p{
    text-align: left;
}
</style>