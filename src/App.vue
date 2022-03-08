<template>
  <header-nav />
  <router-view></router-view>
  <footer-block v-if="$route.name !== 'main'" />
</template>

<script>
import FooterBlock from "./components/FooterBlock.vue";
import HeaderNav from "./components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
    FooterBlock,
  },
};
</script>

FooterBlock
<style lang="scss">
html {
  box-sizing: border-box;
}

body {
  min-width: $mobile;
  overflow-x: hidden;
}

html,
body,
#app {
  height: 100%;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: inherit;
}

main {
  height: 1904px;
  margin-top: 46px;
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
