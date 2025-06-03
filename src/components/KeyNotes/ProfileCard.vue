<template>
  <div>
    <el-card>
      <h2 class="title">KEYNOTE SPEAKERS</h2>
      <div class="profile">
        <el-row :gutter="20" justify="center">
          <el-col :xs="20" :sm="20" :md="20" :lg="8" :xl="8">
            <div class="left">
              <div class="name">
                <h2 >Prof. Fei Fang</h2>
                <p>Carnegie Mellon University, USA</p>
              </div>
              <div class="photo">
                <img src="@/assets/imgs/keynote1.jpg" alt="">
              </div>
            </div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="16" :xl="16">
            <div class="right animate__animated animate__backInDown">
                <h2 >Game Theory and Machine Learning for Addressing Societal Challenges: From Theory to Real-World Impact</h2>
                <p> <strong> Abstract</strong>: Societal challenges spanning security, environmental sustainability, food security, and transportation often involve complex decision-making by multiple self-interested agents. In our research, we delve into the development of game theory and machine learning-based methodologies and tools to tackle these challenges, with a strong focus on contributing to the social good. In this talk, I will introduce our work that has led to successful applications in ferry protection, environmental conservation, and food rescue. Moreover, I will cover our foundational research in inverse game theory, scalable game solving, and interpretable multi-agent reinforcement learning. These advancements are motivated by the real-world problems we have been working on and enable us to tackle more complex decision-making scenarios in the future.</p>
                <p> <strong> Bio</strong>: Dr. Fei Fang is an Associate Professor at the Software and Societal Systems Department in the School of Computer Science at Carnegie Mellon University. Before joining CMU, she was a Postdoctoral Fellow at the Center for Research on Computation and Society (CRCS) at Harvard University, hosted by David Parkes and Barbara Grosz. She received her Ph.D. from the Department of Computer Science at the University of Southern California advised by Milind Tambe (now at Harvard). Her research lies in the field of artificial intelligence and multi-agent systems, focusing on integrating machine learning with game theory. Her work has been motivated by and applied to security, sustainability, and mobility domains, contributing to the theme of AI for Social Good. She is the recipient of the 2022 Sloan Research Fellowship and IJCAI-21 Computers and Thought Award. She was named to IEEE Intelligent Systems’ “AI’s 10 to Watch” list for 2020. Her work has won the Deployed Application Award at IAAI’23, Best Paper Honorable Mention at HCOMP’22, Best Paper Runner-Up at AAAI’21, Distinguished Paper at IJCAI-ECAI’18, Innovative Application Award at IAAI’16, the Outstanding Paper Award in Computational Sustainability Track at IJCAI’15. She received an NSF CAREER Award in 2021. Her dissertation is selected as the runner-up for IFAAMAS-16 Victor Lesser Distinguished Dissertation Award, and is selected to be the winner of the William F. Ballhaus, Jr. Prize for Excellence in Graduate Engineering Research as well as the Best Dissertation Award in Computer Science at the University of Southern California.</p>
            </div>
          </el-col>
        </el-row>
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
h2,p{
    text-align: left;
}
.name{
  background: #004076;
  color: #fff;
  padding: 0 10px;
  margin: 20px 0 20px 0;
}
.photo{
    // border-radius: 50% !important;
    // max-width: 80%;
    width: 300px;
    img{
      opacity: 1;
      border: solid 3px #004076;
    top: 0;
    left: 0;
    z-index: 0;
    // border-radius: 50% !important;
    // width: 100%;
    width: 300px;
    // height: 30%;
    transition: all 0.5s ease-in-out;
    }
}
.photo:hover{
    img{
    opacity: 1;
    transform: translateX(100px)
    scale(1.05)
    }
    .mask{
      opacity: 1;
    }
    .bg{
      opacity: 1;
    
    }
}
.bg{
  opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background: rgba(0,0,0,0.5);
    width: 30%;
    // height: 30%;
    // height: 100%;
    transition: all 0.5s ease-in-out;
    // border-radius: 50% !important;
}
.right{
  h2{
    padding: 10px;
    transition:  all 0.2s ease-in-out;
  }p{
    padding: 10px;
    transition:  all 0.2s ease-in-out;

  }
}
.right{
  animation-delay: 1s;
 h2:hover{
  // background: #004076;
  background-color: rgba(180, 214, 255, 0.3);
  // color: #fff;
}
 p:hover{
  // background: #004076;
  background-color: rgba(180, 214, 255, 0.3);

  // color: #fff;
}
}
</style>
