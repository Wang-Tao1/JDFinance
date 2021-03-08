<template>
  <Panel :class="$style.panel" title="每日签到">
    <div :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160"
        alt=""
      />
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"
        alt=""
      />
      <P>不抢白不抢</P>
    </div>
  </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel,
  },
};
</script>

<style module lang="scss">
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    @include flex(row);
    padding-bottom: 40px;
    position: relative;
    img {
      width: 320px;
      height: 136px;
    }
    p {
      position: absolute;
      top: -108px;
      right: 20px;
      font-size: 24px;
      color: #666;
      height: 112px;
      line-height: 112px;
    }
  }
}
</style>
