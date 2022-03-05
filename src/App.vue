<template>
  <header-nav />
  <main>
    <section-heading />
    <section-about />
    <section-more />
  </main>
  <footer-section />
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
import SectionAbout from "./components/SectionAbout.vue";
import SectionHeading from "./components/SectionHeading.vue";
import SectionMore from "./components/SectionMore.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  components: {
    HeaderNav,
    SectionHeading,
    SectionAbout,
    SectionMore,
    FooterSection,
  },
};
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}

body {
  min-width: $mobile;
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

a {
  text-decoration: none;
}
</style>
