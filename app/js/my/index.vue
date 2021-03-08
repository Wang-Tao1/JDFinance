<template>
  <div class="">
    <New />
    <Navbar />
  </div>
</template>

<script>
import Navbar from "../public/navbar.vue";
import New from "./new.vue";
export default {
  components: {
    New,
    Navbar,
  },
};
</script>

<style scoped lang="scss"></style>
