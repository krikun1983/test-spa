<template>
  <div class="spinner__container">
    <div class="spinner__wrapper">
      <img src="@/assets/img/spinner.svg" alt="spinner" />
    </div>
  </div>
</template>

<script>
export default {
  name: "my-loader",
};
</script>

<style lang="scss" scoped>
.spinner__wrapper {
  position: fixed;
  top: 38%;
  left: 38%;
  z-index: 25;
  width: 70px;
  height: 70px;
  animation: rotate 1s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.2);
  }
}
</style>
