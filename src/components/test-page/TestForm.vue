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
        !questions[questionIndex].isColor && 'form__list',
        questions[questionIndex].isColor && 'form__list-colors',
        questions[questionIndex].isBox && 'form__list-images',
      ]"
    >
      <template
        v-for="question in questions[questionIndex].inputs"
        :key="question.id"
      >
        <test-form-item-color
          v-if="
            question.model === 'colorFirst' || question.model === 'colorSecond'
          "
          :question="question"
          :answer="answer"
          @color="setAnswer"
        />
        <test-form-item-image
          v-else-if="
            question.model === 'boxImageFigure' ||
            question.model === 'boxImageStars'
          "
          :question="question"
          :answer="answer"
          @image="setAnswer"
        />
        <test-form-item-default
          v-else
          :class="[
            'form__list-default',
            answer.value === question.value && 'form__list-default_active',
          ]"
          :question="question"
          :answer="answer"
          @image="setAnswer"
        />
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
import TestFormItemColor from "@/components/test-page/TestFormItemColor.vue";
import TestFormItemDefault from "@/components/test-page/TestFormItemDefault.vue";
import TestFormItemImage from "@/components/test-page/TestFormItemImage.vue";
export default {
  components: { TestFormItemColor, TestFormItemImage, TestFormItemDefault },
  data() {
    return {
      questionIndex: +this.$route.params.id || 1,
      answer: {
        model: "",
        value: "",
      },
      input: null,
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
      if (
        this.questionIndex !== 5 &&
        this.questionIndex !== 6 &&
        this.questionIndex !== 8 &&
        this.questionIndex !== 11
      ) {
        this.input.checked = false;
      }
      this.questionIndex += 1;
      this.$emit("answer", this.questionIndex, this.answer);
      this.answer = {
        model: "",
        value: "",
      };
      this.$router.push(`/test/${this.questionIndex}`);
    },
    setAnswer(model, value, linkInput) {
      this.answer.model = model;
      this.answer.value = value;
      this.input = linkInput;
    },
  },
};
</script>

<style lang="scss">
.form {
  @include flex-column-center();
  width: 100%;
  font-family: "PT Serif", serif;
  font-weight: 400;
  letter-spacing: $spacing-m;

  @include media-m {
    width: 70%;
  }
  @include media-md {
    flex-direction: row;
  }

  &__heading {
    margin-bottom: 10vw;
    width: 86%;
    font-size: 6.5vw;
    line-height: 1.2;
    font-weight: 400;
    letter-spacing: $spacing-m;
    text-align: center;
    color: $white;

    @include media-sm {
      margin-bottom: 7vw;
      font-size: 5.5vw;
    }
    @include media-m {
      margin-bottom: 4vw;
      font-size: 4vw;
    }
    @include media-md {
      margin-bottom: 20px;
      padding-right: 4%;
      font-size: 32px;
      text-align: left;
    }
  }

  &__list {
    width: 100%;
  }

  &__img {
    margin: 0 auto 5vw;
  }

  &__list-colors {
    display: grid;
    grid-template-rows: repeat(3, minmax(23vw, 1fr));
    grid-template-columns: repeat(3, minmax(23vw, 1fr));
    row-gap: 7vw;
    column-gap: 6.5vw;
    margin: 0 auto;

    @include media-m {
      grid-template-rows: repeat(3, minmax(15vw, 1fr));
      grid-template-columns: repeat(3, minmax(15vw, 1fr));
      row-gap: 4vw;
      column-gap: 4vw;
    }
    @include media-md {
      grid-template-rows: repeat(3, minmax(85px, 1fr));
      grid-template-columns: repeat(3, minmax(85px, 1fr));
      row-gap: 20px;
      column-gap: 20px;
    }
  }

  &__list-images {
    display: flex;
    justify-content: space-between;
    padding: 0 11vw;

    @include media-md {
      padding: 0 30px;
    }
  }

  .btn-test {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 25px;

    @include media-md {
      bottom: 180px;
    }
  }
}

.question_2 {
}
.question_3 {
}
.question_4 {
}
.question_5 {
}
.question_6 {
}
.question_7 {
}
.question_8 {
  .form__img {
    @include media-m {
      width: 50%;
    }
  }
}
.question_9 {
  .form__list-default {
    margin-bottom: 3vw;

    @include media-m {
      padding: 1% 0;
    }

    input[type="radio"] + label::before {
      margin-right: 4vw;

      @include media-md {
        margin-right: 20px;
      }
    }
  }
}
.question_10 {
  .form__heading {
    @include media-sm {
      margin-bottom: 4vw;
      font-size: 4.5vw;

      @include media-m {
        font-size: 3vw;
      }
      @include media-md {
        font-size: 30px;
      }
    }
  }
  .form__img {
    @include media-sm {
      width: 40%;
    }
    @include media-m {
      width: 50%;
    }
    @include media-md {
      margin-right: 15px;
      width: 200px;
    }
  }

  .form__list-default {
    margin-bottom: 3vw;

    label {
      @include media-sm {
        min-height: 12vw;
      }
      @include media-m {
        min-height: 8vw;
      }
      @include media-md {
        min-height: 60px;
      }
    }

    input[type="radio"] + label::before {
      margin-right: 4vw;

      @include media-md {
        margin-right: 20px;
      }
    }
  }
}
.question_11 {
  .form__list-images {
    position: relative;
    padding: 0 16px;
  }
  .form__list-images::before {
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
