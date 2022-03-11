<template>
  <li
    :class="[
      'form__image',
      answer.value === question.value && 'form__image-active',
    ]"
    @click.prevent="setAnswer(question.model, question.value)"
  >
    {{ question.label }}
  </li>
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
      this.$emit("image", model, value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form__image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13vw;
  height: 13vw;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-size: 7vw;
  line-height: 1.2;
  background-color: $white;

  @include media-m {
    width: 8vw;
    height: 8vw;
    font-size: 4vw;
  }
}

.form__image-active {
  border: 6px solid $accent;
}
</style>
