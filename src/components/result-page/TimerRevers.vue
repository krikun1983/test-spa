<template>
  <span>{{ timerFn }}</span>
</template>

<script>
export default {
  props: {
    timerBase: {
      type: Number,
      required: true,
    },
  },
  computed: {
    timerFn() {
      const timerMinutes = this.timerBase;
      const minutes = Math.floor(timerMinutes / 60);
      let seconds = timerMinutes % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    },
  },
};
</script>

<style></style>
