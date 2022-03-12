<template>
  <header-nav />
  <router-view></router-view>
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>

FooterBlock
<style lang="scss">
html {
  box-sizing: border-box;
}

body {
  min-width: $media-xss-min;
  overflow-x: hidden;
}

html,
body,
#app,
main {
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

body {
  background-image: url("@/assets/img/bg-all.webp");
  background-repeat: repeat;
  background-color: $bg-images;
}

main {
  padding-top: 46px;

  @include media-m {
    padding-top: 60px;
  }
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
