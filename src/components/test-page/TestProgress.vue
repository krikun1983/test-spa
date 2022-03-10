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
  width: 100%;
  height: 12px;
  background-color: $interactive-default;
  border: 0;
  border-radius: 10.5px;
}

progress::-webkit-progress-bar {
  width: 100%;
  background-color: $interactive-default;
  border-radius: 10.5px;
}

progress::-webkit-progress-value {
  width: 100%;
  background-color: $interactive;
  border-radius: 10.5px;
}
</style>
