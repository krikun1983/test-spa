<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 189px;
  height: 41px;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.6px;
  text-transform: uppercase;
  letter-spacing: calc(1em / 100 * 10);
  color: #0d0c11;
  border: none;
  border-radius: 20px;
}

.btn-active {
  background-color: #ffc700;
}

.btn-active-opacity {
  color: $white;
  border: 1px solid $white;
  background-color: transparent;
}

.btn-disabled {
  color: #8e8e8e;
  background-color: #dadada;
  -webkit-box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25) inset;
  -moz-box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25) inset;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25) inset;
}
</style>
