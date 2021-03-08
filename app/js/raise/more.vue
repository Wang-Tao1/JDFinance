<template>
  <Panel :class="$style.panel" title="更多福利">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"
        alt=""
      />
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"
        alt=""
      />
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
        alt=""
      />
      <span>专享福利 > </span>
    </section>
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
  .content{
      @include flex(row);
      padding-bottom: 40px;
        position: relative;
        justify-content: space-around;
        img{
             width: 33%;
             height: 280px;
        }
        span{
            position: absolute;
          top:-109px;
          right:20px;
          color: #666;
          height: 112px;
          line-height: 112px;
          font-size: 22px;
        }
  }
}
</style>
