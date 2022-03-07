<template>
  <form
    @submit.prevent
    :class="[
      'form',
      questionIndex === 2 && 'question_2',
      questionIndex === 3 && 'question_3',
      questionIndex === 4 && 'question_4',
      questionIndex === 5 && 'question_5',
      questionIndex === 6 && 'question_6',
      questionIndex === 7 && 'question_7',
      questionIndex === 8 && 'question_8',
      questionIndex === 9 && 'question_9',
      questionIndex === 10 && 'question_10',
      questionIndex === 11 && 'question_11',
    ]"
  >
    <h3 class="form__heading">
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
  width: 100%;
  min-height: 522px;
  font-family: "PT Serif", serif;
  font-weight: 400;
  letter-spacing: calc(1em / 100 * 5);

  &__heading {
    margin: 0 auto 40px;
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
    margin-left: 34px;
    font-size: 18px;
    letter-spacing: calc(1em / 100 * 5);
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

  .btn-test {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;
  }
}

.question_2 {
  padding-bottom: 30px;

  .form__heading {
    margin-bottom: 51px;
  }
}
.question_3 {
  padding-bottom: 22px;

  .form__heading {
    margin-bottom: 45px;
  }
}
.question_4 {
  padding-bottom: 28px;

  .form__heading {
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 31px;
  }
  .form__item {
    margin-bottom: 9px;
    min-height: 40px;
  }
  label {
    min-height: 40px;
  }
}
.question_5 {
  padding-bottom: 20px;

  .form__heading {
    margin-bottom: 33px;
    width: 82%;
    font-size: 19px;
    line-height: 23px;
  }
}
.question_6 {
  padding-bottom: 26px;

  .form__heading {
    margin-bottom: 16px;
    width: 82%;
    font-size: 19px;
    line-height: 23px;
  }
}
.question_7 {
  padding-bottom: 16px;

  .form__heading {
    margin-bottom: 24px;
    width: 72%;
  }
  .form__item {
    margin-bottom: 9px;
    min-height: 40px;
  }
  label {
    min-height: 40px;
  }
}
.question_8 {
  padding-bottom: 52px;

  .form__heading {
    margin-bottom: 26px;
    width: 82%;
    font-size: 18px;
    line-height: 23.85px;
  }
  .form__images {
    padding: 0 36px;
  }
  .form__img {
    margin-bottom: 28px;
  }
}
.question_9 {
  padding-bottom: 30px;

  .form__heading {
    font-size: 19px;
    line-height: 25.85px;
  }
  .form__item {
    margin-bottom: 19px;
    min-height: 78px;

    input[type="radio"] + label::before {
      margin-right: 18px;
    }
  }
  label {
    min-height: 78px;
  }
}
.question_10 {
  padding-bottom: 44px;

  .form__heading {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 21.2px;
  }
  .form__img {
    margin-bottom: 20px;
  }
}
.question_11 {
  padding-bottom: 38px;

  .form__heading {
    margin-bottom: 16px;
    width: 76%;
  }
  .form__images {
    position: relative;
    padding: 0 16px;
  }
  .form__images::before {
    content: "";
    position: absolute;
    top: -23px;
    left: 0;
    right: 0;
    height: 4px;
    opacity: 15%;
    background-color: #f2f3f3;
  }
  .form__img {
    margin-bottom: 47px;
  }
}
</style>
