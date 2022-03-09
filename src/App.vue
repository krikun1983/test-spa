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
  min-width: $mobile-xss-min;
  overflow-x: hidden;
}

html,
body,
#app {
  height: 100%;
}

#app {
  background-image: url("@/assets/img/bg-all.jpg");
  background-repeat: repeat;
  background-color: $bg-images;
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
  padding-top: 46px;
  height: 1904px;
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
