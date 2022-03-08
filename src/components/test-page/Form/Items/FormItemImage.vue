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
  width: 41px;
  height: 44px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 49px;
  background-color: $white;
}

.form__image-active {
  border: 6px solid $accent;
}
</style>
