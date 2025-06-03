<template>
  <div>
    <el-card class="card">
      <h2 class="title">LOCAL ATTRACTIONS</h2>
      <p>This year, the international workshop of educational artificial intelligence will be co-located in Kyoto, Japan.</p>
      <h3>Local Attractions in Kyoto&nbsp;</h3>
      <!-- <p>Jakarta is not only the seat of the national government and the provincial government, but it is also
        Indonesia’s political center. Moreover, Jakarta is the hub of Indonesia’s national finance and trade. It is no
        wonder, that you will find Jakarta as a dynamic city, with activities taking place around-the-clock throughout
        its populated areas. On this page, we have gathered information from Jakarta Tourism Office for you.</p>
      <p><strong>Heritage, Architecture &amp; Nature</strong></p> -->
      <ul>
        <li><strong>Kiyomizu-dera (清水寺) – </strong>A famous temple with a beautiful wooden stage.</li>
        <li><strong>Nijo Castle (二条城) – </strong>A historical castle with impressive architecture.&nbsp;</li>
        <li><strong>Gion District (祇園) – </strong> Known for its traditional streets, geisha, and cultural performances.</li>
        <li><strong>Kinkaku-ji (金閣寺) – </strong> The Golden Pavilion.</li>
        <li><strong>Arashiyama (嵐山) – </strong> A scenic area with beautiful landscapes and temples.</li>
        <li><strong>Fushimi Inari Taisha (伏見稲荷大社) – </strong> Famous for its thousands of red torii gates.</li>
        <li><strong>Heian Jingu Shrine (平安神宮) – </strong>  A large and important shrine.</li>
        <li><strong>Ryoan-ji (龍安寺) – </strong> Renowned for its rock garden.</li>
        
      </ul>
      <h3>Shopping in Kyoto&nbsp;</h3>
      <ul>
            <li><strong> Nishiki Market (錦市場) – </strong> A bustling market with a variety of fresh food, local specialties, and unique souvenirs.</li>
            <li><strong> Shinkyogoku Shopping Arcade (新京極通り) – </strong>Offers a range of shops selling traditional handicrafts, clothing, and more.</li>
            <li><strong> Gion Shopping District – </strong>In addition to its cultural significance, it also has shops selling traditional Japanese goods.</li>
            <li><strong> Teramachi Street (寺町通り) – </strong>You can find various shops and boutiques here.</li>
      </ul>
      <h3>Diverse cuisine in Kyoto&nbsp;</h3>
      <ul>
            <li><strong> Yudofu (湯豆腐) – </strong> Tofu cooked in a simple broth.</li>
            <li><strong> Kaiseki ryori (会席料理) – </strong>An elaborate multi-course traditional Japanese meal.</li>
            <li><strong> Oden – </strong>A variety of ingredients simmered in a dashi-based broth.</li>
            <li><strong> Nishin soba (にしんそば) – </strong>Buckwheat noodles with herring.</li>
            <li><strong> Matcha desserts – </strong>Given Kyoto's connection to tea, there are many delicious matcha-based treats like matcha ice cream and matcha mochi.</li>
            <li><strong> Udon – </strong>Thick wheat noodles.</li>
            <li><strong> Tempura – </strong> Lightly battered and fried seafood and vegetables.</li>
      </ul>
      <h3>Some famous local restaurants in Kyoto&nbsp;</h3>
      <ul>
            <li><strong> Gion Tsujiri – </strong> Well-known for its matcha treats.</li>
            <li><strong> Okutan – </strong>Specializes in traditional Japanese cuisine.</li>
            <li><strong> Nishiki Warai – </strong>Offers a variety of local dishes.</li>
      </ul>
  </el-card>
  </div>
</template>
<script lang="ts" setup>
// import { nextTick, onMounted } from "vue";
// const scrollToBottom = () => {
//   // 获取聊天窗口容器
//   let chatRoom: any = document.querySelector(".card");
//   // 滚动到容器底部
//   console.log(chatRoom.scrollHeight);
//   chatRoom.scrollTop = chatRoom.scrollHeight;
//   window.scrollTo(0, chatRoom.scrollHeight);

// }
// onMounted(() => {
// nextTick(() => {
//     scrollToBottom();
//   });
// })
</script>
<style lang="less" scoped>
.title {
  padding-bottom: 10px;
  border-bottom: 1px solid #004076;
  text-align: center;
}
strong,h3{
      color: #004076;
}
h2,
p {
  text-align: left;
}

ul {
  list-style-type: none;
  text-align: left;
  padding-inline-start: 0px;
}

.btn {
  background-color: #004076;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;
  text-decoration: none;
}
</style>
