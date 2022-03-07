<template>
  <progress :max="maxValue" :value="currentValue"></progress>
</template>

<script>
export default {
  props: {
    maxValue: {
      type: Number,
      required: true,
    },
    currentValue: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
progress {
  position: absolute;
  top: 17px;
  width: 82%;
  height: 11px;
  background-color: #949497;
  border: 0;
  border-radius: 10.5px;
}

progress::-webkit-progress-bar {
  width: 100%;
  background-color: #949497;
  border-radius: 10px;
}

progress::-webkit-progress-value {
  width: 100%;
  background-color: #3bde7c;
  border-radius: 10px;
}
</style>
