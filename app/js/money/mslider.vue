<template>
  <Panel :class="$style.panel" title="轮播图">
    <section :class="$style.content">
      <Slider :items="items" :cname="$style.slider" />
    </section>
  </Panel>
</template>

<script>
import Slider from "../core/silder.vue";
import Panel from "../core/panel.vue";
export default {
  components: {
    Slider,
    Panel,
  },
  data() {
    return {
      items: [
        {
          id: "1",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/20112/21/5944/116751/5c454b44E0aaaa73b/86de7ea4c2e9a8ee.jpg?width=750&height=400",
        },
        {
          id: "2",
          src:
            "https://img12.360buyimg.com/jrpmobile/jfs/t1/8702/5/13441/158697/5c4597e5Eb465a4ff/cc51100423abf15d.jpg?width=750&height=400",
        },
      ],
    };
  },
};
</script>

<style module lang="scss">
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    .slider {
      margin-top: 120px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
