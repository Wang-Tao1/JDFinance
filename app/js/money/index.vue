<template lang="html">
  <div>
    <Heador />
    <Mslider />
    <Ada />
    <Money />
    <Adb />
    <Finance/>
    <Adc />
    <Footor :cname="$style.mfooter"/>
    <Navbar />
  </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Mslider from "./mslider.vue";
import Ada from "./ada.vue";
import Money from "./money.vue";
import Adb from "./adb.vue";
import Finance from "./finance.vue";
import Adc from "./adc.vue";

export default {
  components: {
    Heador,
    Mslider,
    Footor,
    Navbar,
    Ada,
    Money,
    Adb,
    Finance,
    Adc,
  },
};
</script>

<style  lang="scss" module>
  .mfooter{
    margin-top: 0 !important;
    ul{
        li:first-child{
            display: none;
        }
    }
  }
</style>
