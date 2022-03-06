<template>
  <main>
    <div class="container">
      <div class="container__layer">
        <progress max="12" :value="questionIndex"></progress>
        <form @submit.prevent class="form">
          <h3 class="form__heading">{{ questions[questionIndex].heading }}</h3>
          <ul class="form__list">
            <li
              v-for="question in questions[questionIndex].inputs"
              :class="[
                'form__item',
                answers[question.model] === question.value
                  ? 'form__item_active'
                  : '',
              ]"
              :key="question.id"
            >
              <input
                type="radio"
                ref="inputs"
                :id="question.value"
                :value="question.value"
                :v-model="question.model"
                :name="question.model"
                @change="answers[question.model] = $event.target.value"
              />
              <label :for="question.value">{{ question.label }}</label>
            </li>
          </ul>
          <my-button
            :class="[
              answers[questions[questionIndex].inputs[0].model]
                ? 'btn-active'
                : 'btn-disabled',
              'btn-test',
            ]"
            @click="getAnswers"
            :disabled="!answers[questions[questionIndex].inputs[0].model]"
            >Далее</my-button
          >
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      questionIndex: 1,
      questions: {
        1: {
          heading: "Ваш пол:",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "man", model: "gender", label: "Мужчина" },
            { id: 2, value: "woman", model: "gender", label: "Женщина" },
          ],
        },
        2: {
          heading: "Укажите ваш возраст:",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "0-17", model: "age", label: "До 18" },
            { id: 2, value: "18-28", model: "age", label: "От 18 до 28" },
            { id: 3, value: "29-35", model: "age", label: "От 29 до 35" },
            { id: 4, value: "36+", model: "age", label: "От 36" },
          ],
        },
        3: {
          heading: "Выберите лишнее:",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "house", model: "excess", label: "Дом" },
            { id: 2, value: "hovel", model: "excess", label: "Шалаш" },
            { id: 3, value: "Bungalow", model: "excess", label: "Бунгало" },
            { id: 4, value: "Bench", model: "excess", label: "Скамейка" },
            { id: 5, value: "Hut", model: "excess", label: "Хижина" },
          ],
        },
        4: {
          heading: "Продолжите числовой ряд: 18  20  24  32",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "62", model: "rowOfNumber", label: "62" },
            { id: 2, value: "48", model: "rowOfNumber", label: "48" },
            { id: 3, value: "74", model: "rowOfNumber", label: "74" },
            { id: 4, value: "57", model: "rowOfNumber", label: "57" },
            { id: 5, value: "60", model: "rowOfNumber", label: "60" },
            { id: 6, value: "77", model: "rowOfNumber", label: "77" },
          ],
        },
        5: {
          heading: "Выберите цвет, который сейчас наиболее Вам приятен:",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "#a8a8a8", model: "colorFirst", label: "#a8a8a8" },
            { id: 2, value: "#0000a9", model: "colorFirst", label: "#0000a9" },
            { id: 3, value: "#00a701", model: "colorFirst", label: "#00a701" },
            { id: 4, value: "#f60100", model: "colorFirst", label: "#f60100" },
            { id: 5, value: "#fdff19", model: "colorFirst", label: "#fdff19" },
            { id: 6, value: "#a95403", model: "colorFirst", label: "#a95403" },
            { id: 7, value: "#000000", model: "colorFirst", label: "#000000" },
            { id: 8, value: "#850068", model: "colorFirst", label: "#850068" },
            { id: 9, value: "#46b2ac", model: "colorFirst", label: "#46b2ac" },
          ],
        },
        6: {
          heading:
            "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "#a8a8a8", model: "colorSecond", label: "#a8a8a8" },
            { id: 2, value: "#46b2ac", model: "colorSecond", label: "#46b2ac" },
            { id: 3, value: "#a95403", model: "colorSecond", label: "#a95403" },
            { id: 4, value: "#00a701", model: "colorSecond", label: "#00a701" },
            { id: 5, value: "#000000", model: "colorSecond", label: "#000000" },
            { id: 6, value: "#f60100", model: "colorSecond", label: "#f60100" },
            { id: 7, value: "#850068", model: "colorSecond", label: "#850068" },
            { id: 8, value: "#fdff19", model: "colorSecond", label: "#fdff19" },
            { id: 9, value: "#0000a9", model: "colorSecond", label: "#0000a9" },
          ],
        },
        7: {
          heading: "Какой из городов лишний?",
          img: "",
          isBox: false,
          inputs: [
            { id: 1, value: "washington", model: "city", label: "Вашингтон" },
            { id: 2, value: "london", model: "city", label: "Лондон" },
            { id: 3, value: "paris", model: "city", label: "Париж" },
            { id: 4, value: "new-york", model: "city", label: "Нью-Йорк" },
            { id: 5, value: "moscow", model: "city", label: "Москва" },
            { id: 6, value: "ottawa", model: "city", label: "Оттава" },
          ],
        },
        8: {
          heading: "Выберите правильную фигуру из четырёх пронумерованных.",
          img: "@/assets/img/figure_bg.webp",
          isBox: true,
          inputs: [
            { id: 1, value: "1", model: "figure", label: "1" },
            { id: 2, value: "2", model: "figure", label: "2" },
            { id: 3, value: "3", model: "figure", label: "3" },
            { id: 4, value: "4", model: "figure", label: "4" },
          ],
        },
        9: {
          heading: "Вам привычнее и важнее:",
          img: "",
          isBox: false,
          inputs: [
            {
              id: 1,
              value: "1",
              model: "motivation",
              label: "Наслаждаться каждой минутой проведенного времени",
            },
            {
              id: 2,
              value: "2",
              model: "motivation",
              label: "Быть устремленными мыслями в будущее",
            },
            {
              id: 3,
              value: "3",
              model: "motivation",
              label: "Учитывать в ежедневной практике прошлый опыт",
            },
          ],
        },
        10: {
          heading:
            "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
          img: "@/assets/img/geometric_figure_bg.webp",
          isBox: false,
          inputs: [
            {
              id: 1,
              value: "1",
              model: "geometric",
              label: "Оно остроконечное",
            },
            {
              id: 2,
              value: "2",
              model: "geometric",
              label: "Оно устойчиво",
            },
            {
              id: 3,
              value: "3",
              model: "geometric",
              label: "Оно-находится в состоянии равновесия",
            },
          ],
        },
        11: {
          heading: "Вставьте подходящее число",
          img: "@/assets/img/stars_bg.webp",
          isBox: true,
          inputs: [
            {
              id: 1,
              value: "34",
              model: "stars",
              label: "34",
            },
            {
              id: 2,
              value: "36",
              model: "stars",
              label: "36",
            },
            {
              id: 3,
              value: "53",
              model: "stars",
              label: "53",
            },
            {
              id: 4,
              value: "44",
              model: "stars",
              label: "44",
            },
            {
              id: 5,
              value: "66",
              model: "stars",
              label: "66",
            },
            {
              id: 6,
              value: "42",
              model: "stars",
              label: "42",
            },
          ],
        },
        12: {
          heading: "Обработка результатов",
          img: "",
          isBox: false,
          inputs: [],
        },
      },
      answers: {
        gender: "",
      },
    };
  },
  methods: {
    getAnswers() {
      this.questionIndex += 1;
      this.$refs.inputs.forEach((item) => (item.checked = false));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 568px;
  background-image: url("@/assets/img/brain_bk_footer.webp");
  background-color: $bg-images;
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;

  &__layer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 568px;
    background-color: rgba(13, 12, 17, 0.728);

    progress {
      position: absolute;
      top: 17px;
      width: 82%;
      height: 11px;
      background-color: #949497;
      border: 0;
      border-radius: 10.5px;
    }

    progress::-webkit-progress-bar {
      width: 100%;
      background-color: #949497;
      border-radius: 10px;
    }

    progress::-webkit-progress-value {
      width: 100%;
      background-color: #3bde7c;
      border-radius: 10px;
    }

    .btn-test {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 25px;
    }
  }
}

.form {
  width: 100%;
  font-family: "PT Serif", serif;
  font-weight: 400;
  letter-spacing: calc(1em / 100 * 5);

  &__heading {
    margin: 0 auto 36px;
    width: 92%;
    font-size: 20px;
    line-height: 26.5px;
    letter-spacing: calc(1em / 100 * 5);
    text-align: center;
    color: $white;
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

  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    height: 50px;
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
}
</style>
