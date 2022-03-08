<template>
  <main>
    <div class="container">
      <div class="container__layer">
        <progress-line
          v-if="progress.value < 13"
          :maxValue="progress.max"
          :currentValue="progress.value"
        />
        <form-question
          v-if="progress.value < 12"
          :questions="questions"
          @answer="getAnswerOfForm"
        />
        <div v-else-if="progress.value === 12" class="loader">
          <h3 class="loader__heading">Обработка результатов</h3>
          <my-loader />
          <p class="loader__text">
            Определение стиля мышления...............
            ................................................................
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FormQuestion from "@/components/test-page/Form/FormQuestion.vue";
import ProgressLine from "@/components/test-page/ProgressLine.vue";
import data from "@/data/data-questions.json";
export default {
  components: { FormQuestion, ProgressLine },
  data() {
    return {
      questions: data,
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
  updated() {
    if (this.progress.value === 12) {
      setTimeout(() => {
        this.$router.push({ name: "result" });
      }, 3000);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
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
    height: 100%;
    background-color: rgba(13, 12, 17, 0.728);
  }

  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 230px;
    margin-bottom: 142px;
    font-family: "PT Serif", serif;
    font-weight: 400;
    letter-spacing: calc(1em / 100 * 5);
    color: $white;

    &__heading {
      margin: 0 auto 33px;
      width: 70%;
      font-weight: inherit;
      font-size: 23px;
      line-height: 30.47px;
      text-align: center;
    }
    &__text {
      padding: 0 22px;
      font-size: 14px;
      line-height: 18.55px;
      text-align: justify;
    }
  }
}
</style>
