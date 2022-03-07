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
import FormQuestion from "@/components/test-page/FormQuestion.vue";
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
    async getApiResource(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Errors");
        }
        return await response.json();
      } catch (error) {
        console.log(error);
      }
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
