<template>
  <li
    :class="[
      'form__color',
      answer.value === question.value && 'form__color-active',
    ]"
    :style="{ backgroundColor: question.value }"
    @click.prevent="setAnswer(question.model, question.value)"
  ></li>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    answer: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setAnswer(model, value) {
      this.$emit("color", model, value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form__color {
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.form__color-active {
  border: 6px solid $accent;
}
</style>
