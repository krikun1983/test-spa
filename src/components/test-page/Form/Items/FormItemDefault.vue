<template>
  <li
    :class="[
      'form__item',
      answer.value === question.value ? 'form__item_active' : '',
    ]"
  >
    <input
      type="radio"
      ref="currentInput"
      :id="question.value"
      :value="question.value"
      :v-model="answer.value"
      :name="question.model"
      @change="setAnswer(question.model, $event.target.value)"
    />
    <label :for="question.value">{{ question.label }}</label>
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
      this.$emit("image", model, value, this.$refs.currentInput);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 50px;
  margin-left: 34px;
  font-size: 18px;
  letter-spacing: calc(1em / 100 * 5);
  color: $white;
}

.form__item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  min-height: 50px;
  background-color: rgba(242, 243, 243, 0.15);

  input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    margin-right: 39px;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $white;
    border-radius: 20px;
  }

  input[type="radio"]:checked + label::before {
    border: 1px solid $bg-images;
    background-color: #2950c2;
  }

  &_active {
    background-color: $accent;

    label {
      color: $bg-images;
    }
  }
}
</style>
