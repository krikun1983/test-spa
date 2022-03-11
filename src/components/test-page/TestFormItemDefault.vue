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
.form__item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background-color: rgba(242, 243, 243, 0.15);

  label {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 16vw;
    margin-left: 11%;
    margin-right: 10%;
    font-size: 6vw;
    line-height: 1.2;
    letter-spacing: $spacing-s;
    color: $white;

    @include media-sm {
      min-height: 14vw;
      font-size: 5.5vw;
    }

    @include media-m {
      min-height: 8vw;
      font-size: 3.5vw;
    }
  }

  input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  input[type="radio"] + label::before {
    content: "";
    display: inline-block;
    margin-right: 12vw;
    width: 6vw;
    height: 6vw;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid $white;
    border-radius: 50%;

    @include media-sm {
      width: 5vw;
      height: 5vw;
    }

    @include media-m {
      margin-right: 6vw;
      width: 4vw;
      height: 4vw;
    }
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
