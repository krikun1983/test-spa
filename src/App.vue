<template>
  <header-nav />
  <main>
    <section-heading />
  </main>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import SectionHeading from "./components/SectionHeading.vue";
export default {
  components: { HeaderNav, SectionHeading },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

body {
  min-width: 320px;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: inherit;
}

li {
  list-style: none;
}

img {
  max-width: 100%;
  display: block;
}
</style>
