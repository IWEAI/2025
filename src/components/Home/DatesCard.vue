<template>
    <!-- <el-card> -->
            <div class="dates">
            <h2>Important Dates</h2>
            <p class="bold">Abstract Submission Deadline</p>
            <p>August 6, 2024</p>
            <p class="bold">Acceptance Notification</p>
            <p>August 13, 2024</p>
            <p class="bold">Camera ready deadline</p>
            <p>September 4, 2024</p>
            <p class="bold">Workshop</p>
            <p>November18-19, 2024</p>
            <p class="bold">    All deadlines are at the end of the day specified, anywhere on Earth (UTC-12).</p>
        </div>
        <!-- </el-card> -->
</template>
<script lang="ts" setup>
</script>
<style scoped>
.dates{
    background-size: cover;
    background-position: center;
    /* background: linear-gradient(90deg,  rgba(222, 238, 255, 0.5),rgba(33, 113, 181, 0.5) 85%); */
    background: #004076;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px #a1adb9;
    color: #fff;
    margin: 20px 0px;
}
.dates:hover{
    box-shadow: 0 0 20px #a1adb9;
    transition: all linear 0.3s;
    scale: 1.01;
}
/* el-card{
    width: 100%;
    margin: 10px 0;
} */
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