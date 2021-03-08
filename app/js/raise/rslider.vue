<template>
  <Panel :class="$style.panel" title="金融头条">
    <swiper :options="options" :class="$style.swiper">
      <swiper-slide>百万白条券免费送，速来领取！<em>></em></swiper-slide>
      <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
    </swiper>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Panel,
    swiper,
    swiperSlide,
  },
  data() {
    return {
      options: {
        direction: "vertical",
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
};
</script>

<style module lang="scss">
@import "../../css/element.scss";
 .panel{
     @include panel;
    margin-top: 120px !important; 
    >h4{
         display: none;
     }
     .swiper{
       height: 72px; 
       overflow: hidden;
       line-height:72px;
       padding-left:178px;
       background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
       background-size:120px 80px;
     }
 }
</style>

<style lang="scss">
    .swiper-slide{
       font-family: PingFangSC-Medium;
       font-size:26px;
       color: #333;
       position: relative;
        em{
            color: #ddd;
            position: absolute;
            right: 10px;
            top: -2px;
        }
    }
</style>