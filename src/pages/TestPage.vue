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
        <div v-else class="result">
          <h4 class="result__heading-small">Ваш результат рассчитан:</h4>
          <p class="result__text">
            Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на
            15 пунктов отличается от среднего в большую или меньшую сторону!
          </p>
          <h3 class="result__heading">Скорее получите свой результат!</h3>
          <div class="result__box">
            <p class="result__box-description">
              В целях защиты персональных данных результат теста, их подробная
              интерпретация и рекомендации доступны в виде голосового сообщения
              по звонку с вашего мобильного телефона
            </p>
          </div>
          <p class="result__timer">
            Звоните скорее, запись доступна всего <span>10:00 </span> минут
          </p>
          <button class="result__btn" @click="getApiResource">
            <img src="@/assets/img/phone.svg" alt="phone" />
            <span>Позвонить и прослушать результат</span>
          </button>
          <div class="user__wrapper">
            <div v-if="Object.keys(swapi).length" class="user">
              <div>
                Имя: <span>{{ swapi.name }}</span>
              </div>
              <div>
                Рост: <span>{{ swapi.height }}</span>
              </div>
              <div>
                Вес: <span>{{ swapi.mass }}</span>
              </div>
              <div>
                Пол: <span>{{ swapi.gender }}</span>
              </div>
              <div>
                Цвет глаз: <span>{{ swapi.eye_color }}</span>
              </div>
              <div>
                Цвет волос: <span>{{ swapi.hair_color }}</span>
              </div>
            </div>
          </div>
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
      swapi: {},
    };
  },
  methods: {
    getAnswerOfForm(index, answer) {
      this.progress.value = index;
      this.answers[answer.model] = answer.value;
    },
    selectionApiResource(name, height, mass, gender, eye_color, hair_color) {
      return {
        name,
        height,
        mass,
        gender,
        eye_color,
        hair_color,
      };
    },
    async getApiResource() {
      try {
        const response = await fetch("https://swapi.dev/api/people/1/");
        if (!response.ok) {
          throw new Error("Errors");
        }
        const user = await response.json();
        this.swapi = this.selectionApiResource(
          user.name,
          user.height,
          user.mass,
          user.gender,
          user.eye_color,
          user.hair_color
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
  updated() {
    if (this.progress.value === 12) {
      setTimeout(() => {
        this.progress.value = 13;
      }, 3000);
    }
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

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "PT Serif", serif;
  color: $white;

  &__heading-small {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: calc(1em / 100 * 10);
    text-align: center;
    text-transform: uppercase;
  }
  &__text {
    margin-bottom: 18px;
    padding: 0 26px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    text-align: center;
  }
  &__heading {
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
    letter-spacing: calc(1em / 100 * 10);
    text-align: center;
    text-transform: uppercase;
    color: $interactive;
  }
  &__box {
    margin: 0 32px 8px;
    padding: 15px 12px 12px;
    border-radius: 6px;
    background-color: #1c2741;

    &-description {
      font-family: "Roboto", sans-serif;
      font-size: 8px;
      line-height: 14px;
      font-weight: 500;
      letter-spacing: 2px;
      text-align: center;
      text-transform: uppercase;
      color: $white;
    }
  }
  &__timer {
    margin-bottom: 11px;
    padding: 0 24px;
    font-family: "PT Serif", serif;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: calc(1em / 100 * 10);
    text-align: center;
    color: $interactive;

    span {
      font-size: 20px;
      line-height: 20px;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    width: 290px;
    height: 92px;
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 17.58px;
    font-weight: 900;
    letter-spacing: calc(1em / 100 * 5);
    text-align: left;
    color: $white;
    border: none;
    border-radius: 5px;
    background-color: #eb1b00;
    cursor: pointer;

    img {
      padding-right: 18px;
    }
  }
}

.user {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  column-gap: 3vw;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-weight: bold;
    color: $interactive;
  }
}
</style>
