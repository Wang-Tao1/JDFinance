<template lang="html">
  <div>
    <Heador />
    <Islider />
    <More />
    <Welfare />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Islider from "./islider.vue";
import More from "./more.vue";
import Welfare from "./welfare.vue";
export default {
  components: {
    Heador,
    Islider,
    More,
    Footor,
    Navbar,
    Welfare,
  },
};
</script>
