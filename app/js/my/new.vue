<template>
  <Panel :class="$style.panel" title="极速借贷"> 网站正在建设中.... </Panel>
</template>

<script>
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel,
  },
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  background: none !important;
  > h4 {
    display: none;
  }
}
</style>
