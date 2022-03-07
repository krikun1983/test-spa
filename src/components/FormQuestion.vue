<template>
  <form @submit.prevent class="form">
    <h3
      class="form__heading"
      :style="{
        width: (questionIndex === 5 || questionIndex === 6) && '88%',
        fontSize:
          ((questionIndex === 5 || questionIndex === 6) && '19px') ||
          (questionIndex === 8 && '18px') ||
          (questionIndex === 10 && '16px'),
        lineHeight: questionIndex === 10 && '21.2px',
      }"
    >
      {{ questions[questionIndex].heading }}
    </h3>
    <img
      class="form__img"
      v-if="questions[questionIndex].img"
      :src="require(`@/assets/img/${questions[questionIndex].img}`)"
      :alt="questions[questionIndex].heading"
    />
    <ul
      :class="[
        'form__list',
        questions[questionIndex].isColor && 'form__colors',
        questions[questionIndex].isBox && 'form__images',
        questionIndex === 11 && 'question_11',
      ]"
    >
      <template
        v-for="question in questions[questionIndex].inputs"
        :key="question.id"
      >
        <li
          v-if="
            question.model === 'colorFirst' || question.model === 'colorSecond'
          "
          :class="[
            'form__color',
            answer.value === question.value && 'form__color-active',
          ]"
          :style="{ backgroundColor: question.value }"
          @click.prevent="setAnswer(question.model, question.value)"
        ></li>
        <li
          v-else-if="question.model === 'figure' || question.model === 'stars'"
          :class="[
            'form__image',
            answer.value === question.value && 'form__image-active',
          ]"
          @click.prevent="setAnswer(question.model, question.value)"
        >
          {{ question.label }}
        </li>
        <li
          :class="[
            'form__item',
            answer.value === question.value ? 'form__item_active' : '',
            questionIndex === 9 && 'question_9',
          ]"
          v-else
        >
          <input
            type="radio"
            ref="inputs"
            :id="question.value"
            :value="question.value"
            :v-model="answer.value"
            :name="question.model"
            @change="setAnswer(question.model, $event.target.value)"
          />
          <label :for="question.value">{{ question.label }}</label>
        </li>
      </template>
    </ul>
    <my-button
      :class="[answer.value ? 'btn-active' : 'btn-disabled', 'btn-test']"
      @click="nextQuestions"
      :disabled="!answer.value"
      >Далее</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      questionIndex: 1,
      answer: {
        model: "",
        value: "",
      },
    };
  },
  props: {
    questions: {
      type: Object,
      required: true,
    },
  },
  methods: {
    nextQuestions() {
      this.questionIndex += 1;
      this.$emit("answer", this.questionIndex, this.answer);
      this.$refs.inputs.forEach((item) => (item.checked = false));
      this.answer = {
        model: "",
        value: "",
      };
    },
    setAnswer(model, value) {
      this.answer.model = model;
      this.answer.value = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  margin-bottom: 25px;
  width: 100%;
  font-family: "PT Serif", serif;
  font-weight: 400;
  letter-spacing: calc(1em / 100 * 5);

  &__heading {
    margin: 0 auto;
    margin-bottom: max(36px);
    width: 86%;
    font-size: 20px;
    font-weight: 400;
    line-height: 26.5px;
    letter-spacing: calc(1em / 100 * 5);
    text-align: center;
    color: $white;
  }

  &__img {
    margin: 0 auto 47px;
  }

  label {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 50px;
    margin-left: 39px;
    font-size: 18px;
    color: $white;
  }

  &__colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 27px;

    .form__color {
      margin-bottom: 24px;
      width: 75px;
      height: 75px;
    }

    .form__color-active {
      border: 6px solid $accent;
    }
  }

  &__images {
    display: flex;
    justify-content: space-between;
    padding: 0 30px;

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
  }

  &__item {
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

  .question_9 {
    margin-bottom: 19px;
    padding: 9px 0;

    input[type="radio"] + label::before {
      content: "";
      margin-right: 15px;
    }
  }

  .question_11 {
    position: relative;
    padding: 0 15px;
  }

  .question_11::before {
    content: "";
    position: absolute;
    top: -23px;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 15%;
    background-color: #f2f3f3;
  }

  .btn-test {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
  }
}
</style>
