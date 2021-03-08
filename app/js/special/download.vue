<template lang="html">
   <Panel :class="$style.panel" title="下载APP">
        <section :class="$style.content">
            <div class=""></div>
            <p>立即下载</p>
            <span>copyright</span>
        </section>
   </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components :{
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  html body{
      background: #fff;
  }
 .panel{
     @include panel;
        margin: 0!important;
     >h4{
         display: none;
     }
      .content{
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        height: 1136px;
        width: 100%;
        >div{
            background: url(https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?) center center no-repeat;
            background-size: 100% auto;
            width: 600px;
            height: 800px;
            margin-top: -400px;
        }
        >p{
            @include btn(32px,#fff,#F1443E,5px,5px);
              height: 80px;
              width: 471px;
              line-height: 80px;
              background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
              box-shadow: 0 12px 32px 0 rgba(255,159,135,.6);
              position: fixed;
              bottom: 160px;
        }
        >span{
            position: fixed;
            bottom: 20px;
            font-size: 20px;
            color: #ddd;
        }
      }
 }
</style>
