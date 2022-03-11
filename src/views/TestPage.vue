<template>
  <main>
    <section class="test-container">
      <div class="test-container__layer">
        <div class="progress">
          <test-progress
            v-if="progress.value < 13"
            :maxValue="progress.max"
            :currentValue="progress.value"
          />
        </div>
        <test-form
          v-if="progress.value < 12"
          :questions="questions"
          @answer="getAnswerOfForm"
        />
        <test-loader v-else-if="progress.value === 12" />
      </div>
    </section>
  </main>
</template>

<script>
import TestProgress from "@/components/test-page/TestProgress.vue";
import TestForm from "@/components/test-page/TestForm.vue";
import TestLoader from "@/components/test-page/TestLoader.vue";
import data from "@/data/data-questions.json";
export default {
  components: { TestProgress, TestForm, TestLoader },
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
  mounted() {
    if (+this.$route.params.id === 12) {
      this.$router.push({ name: "result" });
    }
  },
};
</script>

<style lang="scss" scoped>
.test-container {
  margin: 0 auto;
  max-width: $media-xl;
  min-height: 522px;
  height: 100%;

  &__layer {
    @include flex-column-center();
    position: relative;
    padding-top: 12vw;
    padding-bottom: 24vw;
    max-width: $media-xl;
    min-height: 522px;
    height: 100%;
    background-color: $bg-layer;
  }

  .progress {
    position: absolute;
    top: 2%;
    width: 82%;

    @include media-md {
      width: 60%;
    }
  }
}
</style>
