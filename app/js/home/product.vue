<template>
  <Panel class="panel" title="众筹新品">
    <div class="content">
      <div class="arrow">更多尖货></div>
      <Slider :items="items" :options="options" :cname="$style.product_slider">
      </Slider>
    </div>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
import Slider from "../core/silder.vue";
export default {
  components: {
    Panel,
    Slider,
  },
  data() {
    return {
      items: [
        {
          id: "1",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13963/267/2355123229/48850/254f797a/5a3c59aeN9cb550f6.jpg?width=335&height=421",
        },
        {
          id: "2",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t13021/306/1996997425/21953/bda69db3/5a2f6a17N9da099b1.jpg?width=335&height=421",
        },
        {
          id: "3",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t14125/310/1997192193/46667/3c910f8b/5a2f6a36Nad95b650.jpg?width=335&height=421",
        },
        {
          id: "4",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t15784/188/381232069/39444/8878571d/5a2f6a4aNbd5a574c.jpg?width=335&height=421",
        },
      ],
      options: {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true,
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    position: relative;
    div {
      position: absolute;
      font-size: 22px;
      color: #999;
      right: 15px;
      top: -65px;
    }
  }
}
</style>

<style lang="scss" module>
.product_slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>
