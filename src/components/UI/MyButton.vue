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
  margin: 0 auto;
  width: 189px;
  height: 41px;
  font-family: "Merriweather", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17.6px;
  text-transform: uppercase;
  letter-spacing: $spacing-xl;
  color: #0d0c11;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.btn-active {
  background-color: $accent;

  &:hover {
    color: $accent;
    border: 1px solid $accent;
    background-color: transparent;
  }
}

.btn-active-opacity {
  color: $white;
  border: 1px solid $white;
  background-color: transparent;

  &:hover {
    color: #0d0c11;
    border: none;
    background-color: $accent;
  }
}

.btn-disabled {
  color: $btn-text-disabled;
  background-color: $btn-bg-disabled;
  -webkit-box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25) inset;
  -moz-box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25) inset;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.25) inset;
}
</style>
