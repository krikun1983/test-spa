<template>
  <header class="header">
    <div class="container">
      <div class="burger">
        <span class="burger__lines"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 46px;
  background-color: #181818;
}

.burger {
  position: relative;
  top: 23px;
  left: 15px;
  width: 24px;
  height: 16px;
  z-index: 1;
  cursor: pointer;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
.burger__lines,
.burger__lines::before,
.burger__lines::after {
  position: absolute;
  width: 24px;
  height: 2.67px;
  background-color: #696969;
}

.burger__lines::before {
  content: "";
  top: -7px;
}
.burger__lines::after {
  content: "";
  top: 7px;
}
</style>
