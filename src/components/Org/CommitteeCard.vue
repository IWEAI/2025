<template>
  <div>
    <el-card>
      <h2 class="title">ORGANIZING COMMITTEE</h2>
      <div class="mx-auto text-center">
                        <div class="col-lg-12">
                            <h3>Workshop Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg- committee-people">
                            <div class="img-box">
                                <img src="@/assets/imgs/people/Yunchengjiang.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Yuncheng Jiang</strong>
                            <br>South China Normal University, China
                        </div>
                        <div class="col-lg- committee-people">
                            <div class="img-box">
                                <img src="@/assets/imgs/people/GangLi.jpg" class="img-thumbnail rounded-circle">
                            </div>

                            <br><strong>Gang Li</strong>
                            <br>Deakin University, Australia
                        </div>
                    </div>
                        <div class="col-lg-12">
                            <h3>Program Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        
                        <div class="col-lg-6 committee-people">
                            <div class="img-box">
                            <img src="@/assets/imgs/people/XiaoweiJia.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Xiaowei Jia</strong>
                            <br>University of Pittsburgh, United States
                        </div>
                        <div class="col-lg-6 committee-people">
                            <div class="img-box">
                            <img src="@/assets/imgs/people/ChenLi.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Chen Li</strong>
                            <br>Nagoya University, Japan
                        </div>
                        <div class="col-lg-6 committee-people">
                            <div class="img-box">
                            <img src="@/assets/imgs/people/GuojingZhou.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Guojing Zhou</strong>
                            <br>South China Normal University, China
                        </div>
                    </div>
                        <div class="col-lg-12">
                            <h3>Publicity Chairs</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg-12 committee-people">
                            <div class="img-box">
                            <img src="@/assets/imgs/people/LihuaCai.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Lihua Cai</strong>
                            <br>South China Normal University, China
                        </div>
                        <div class="col-lg-12 committee-people">
                            <div class="img-box">
                            <img src="@/assets/imgs/people/WenjunMa.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Wenjun Ma</strong>
                            <br>South China Normal University, China
                        </div>
                        <div class="col-lg-6 committee-people">
                            <div class="img-box">
                            <img src="@/assets/imgs/people/JieyuZhan.jpg" class="img-thumbnail rounded-circle">
                            </div>
                            <br><strong>Jieyu Zhan</strong>
                            <br>South China Normal University, China
                        </div>
                    </div>
                        <div class="col-lg-12">
                            <h3>Advisory Board</h3>
                        </div>
                    <div class="row committee-sub mx-auto">
                        <div class="col-lg- committee-people">
                            <!-- <h2>To Be Determined</h2> -->
                            <!-- <br>University of Tasmania, Australia -->
                            <div class="col-lg-6 committee-people">
                            <div class="img-box">

                                <img src="@/assets/imgs/people/WeiruLiu.png" class="img-thumbnail rounded-circle">
                            </div>
                                <br><strong>Weiru Liu</strong>
                                <br>University of Bristol, United Kingdom
                            </div>
                        </div>
                        <div class="col-lg- committee-people">
                            <!-- <h2>To Be Determined</h2> -->
                            <!-- <br>University of Tasmania, Australia -->
                            <div class="col-lg-6 committee-people">
                            <div class="img-box">

                                <img src="@/assets/imgs/people/LauraBarnes.jpg" class="img-thumbnail rounded-circle">
                            </div>
                                <br><strong>Laura E. Barnes</strong>
                                <br>University of Virginia, United States
                            </div>
                        </div>
                        <div class="col-lg- committee-people">
                            <div class="col-lg-6 committee-people">
                            <div class="img-box">

                                <img src="@/assets/imgs/people/Aladdin.jpg" class="img-thumbnail rounded-circle">
                            </div>
                                <br><strong>Aladdin Ayesh</strong>
                                <br>University of Aberdeen, United Kingdom
                            </div>
                        </div>
                        <div class="col-lg- committee-people">
                            <div class="col-lg-6 committee-people">
                                <img src="@/assets/imgs/people/MengchiLiu.jpg" class="img-thumbnail rounded-circle">
                                <br><strong>Mengchi Liu</strong>
                                <br>Carleton University, Canada
                            </div>
                        </div>
                        <div class="col-lg- committee-people">
                            <div class="col-lg-6 committee-people">
                            <div class="img-box">
                                <img src="@/assets/imgs/people/YongTang.jpg" class="img-thumbnail rounded-circle">
                            </div>
                                <br><strong>Yong Tang</strong>
                                <br> South China Normal University, China
                            </div>
                        </div>
                    </div>
                </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #04162c;
  text-align: center;
}

strong{
    border-bottom: solid 2px #004076;
}
.committee-sub{
  margin-top:20px;
  margin-bottom:40px;
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: #004076;
}

.committee-people{
  margin-top:20px;
  width: 30%;
  display: flex;
flex-direction: column;
align-items: center;
  br{
      text-align: left;
  }
  h2{
    border: double 6px #004076;
  }
}
@media screen and (max-width: 1268px){
    .committee-people{
        width: 50%;
    }
}
@media screen and (max-width: 400px){
    .committee-people{
        width: 80%;
    }
}
.img-box{
    width:100px;
    height:100px;
    margin:0 auto;
    border-radius: 50%;
    overflow: hidden;
    border: solid 2px #004076;  
    background: #d7d7d7;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
}
.committee-people > img{
  width:100px;
  margin-bottom:15px;
  border-radius: 50%;
  background: #000;
  // image-rendering:-moz-crisp-edges;
  // image-rendering:-o-crisp-edges;
  // image-rendering:-webkit-optimize-contrast;
  // image-rendering: crisp-edges;
  -ms-interpolation-mode:nearest-neighbor;
    border: solid 2px #004076;  
}
.row{
    display: flex;
    align-items: flex-start;
    
}
</style>
