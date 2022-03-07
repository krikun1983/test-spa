<template>
  <main>
    <div class="container">
      <div class="container__layer">
        <progress-line
          :maxValue="progress.max"
          :currentValue="progress.value"
        />
        <form-question :questions="questions" @answer="getAnswerOfForm" />
      </div>
    </div>
  </main>
</template>

<script>
import FormQuestion from "@/components/FormQuestion.vue";
import ProgressLine from "@/components/ProgressLine.vue";
export default {
  components: { FormQuestion, ProgressLine },
  data() {
    return {
      questions: {
        1: {
          heading: "Ваш пол:",
          img: "",
          isColor: false,
          isBox: false,
          inputs: [
            { id: 1, value: "man", model: "gender", label: "Мужчина" },
            { id: 2, value: "woman", model: "gender", label: "Женщина" },
          ],
        },
        2: {
          heading: "Укажите ваш возраст:",
          img: "",
          isColor: false,
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
          isColor: false,
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
          isColor: false,
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
          heading: "Выберите цвет, который сейчас наиболее вам приятен:",
          img: "",
          isColor: true,
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
            "Отдохните пару секунд, еще раз выберите цвет, который сейчас наиболее вам приятен:",
          img: "",
          isColor: true,
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
          isColor: false,
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
          img: "figure_bg.webp",
          isColor: false,
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
          isColor: false,
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
          img: "geometric_figure_bg.webp",
          isColor: false,
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
          img: "stars_bg.webp",
          isColor: false,
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
          isColor: false,
          isBox: false,
          inputs: [],
        },
      },
      answers: {
        gender: "",
        age: "",
        excess: "",
        rowOfNumber: "",
        colorFirst: "",
        colorSecond: "",
        city: "",
        figure: "",
        motivation: "",
        geometric: "",
        stars: "",
      },
      progress: {
        max: 12,
        value: 1,
      },
    };
  },
  methods: {
    getAnswerOfForm(index, answer) {
      this.progress.value = index;
      this.answers[answer.model] = answer.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 522px;
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
    min-height: 522px;
    background-color: rgba(13, 12, 17, 0.728);
  }
}
</style>
