<template>
  <div class="">
    <Heador />
    <Hslider />
    <Novice />
    <Borrow />
    <Money />
    <Product />
    <Left />
    <Footor />
    <Navbar />
  </div>
</template>

<script>
import Heador from "../public/header.vue";
import Hslider from "./hslider.vue";
import Novice from "./novice.vue";
import Borrow from "./borrow.vue";
import Money from "./money.vue";
import Product from "./product.vue";
import Left from "./left.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
export default {
  name: "",
  components: {
    Heador,
    Hslider,
    Novice,
    Borrow,
    Money,
    Product,
    Left,
    Footor,
    Navbar,
  },
};
</script>

<style scoped lang=""></style>
